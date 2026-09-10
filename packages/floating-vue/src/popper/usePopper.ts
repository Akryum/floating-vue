import {
  computed,
  getCurrentInstance,
  inject,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  provide,
  reactive,
  ref,
  useAttrs,
  watch,
} from 'vue'
import type { ExtractPropTypes, SetupContext } from 'vue'
import { computePosition, getOverflowAncestors } from '@floating-ui/dom'
import { SHOW_EVENT_MAP, HIDE_EVENT_MAP } from '../util/events'
import { nextFrame } from '../util/frame'
import { acquireMouseTracking, isAimingPopper, releaseMouseTracking } from './aiming'
import { acquirePopperContext, releasePopperContext } from './context'
import type { PopperContext, PopperController, PopperEvent } from './context'
import { buildPositionOptions } from './position'
import type { popperEmits, popperProps } from './props'
import { EventListeners } from './triggers'

export type PopperProps = ExtractPropTypes<typeof popperProps>

export type PopperEmit = SetupContext<typeof popperEmits>['emit']

/** Methods exposed by components built on `usePopper` (via `expose`). */
export type PopperExposed = Pick<ReturnType<typeof usePopper>, 'show' | 'hide' | 'dispose' | 'onResize'>

/** Data passed to the default slot of components built on `usePopper`. */
export type PopperSlotData = ReturnType<typeof usePopper>['slotData']['value']

const PROVIDE_KEY = '__floating-vue__popper'

export function usePopper (props: PopperProps, emit: PopperEmit) {
  if (props.autoMinSize) {
    console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.')
  }
  if (props.autoMaxSize) {
    console.warn('[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.')
  }

  // Reactive state (feeds slotData)

  const isShown = ref(false)
  const isMounted = ref(false)
  const skipTransition = ref(false)
  const classes = reactive({
    showFrom: false,
    showTo: false,
    hideFrom: false,
    hideTo: true,
  })
  const result = reactive({
    x: 0,
    y: 0,
    placement: '',
    strategy: props.strategy,
    arrow: {
      x: 0,
      y: 0,
      centerOffset: 0,
    },
    transformOrigin: null as string | null,
  })
  const lastAutoHide = ref(true)

  const randomId = `popper_${[Math.random(), Date.now()].map(n => n.toString(36).substring(2, 10)).join('_')}`
  const shownChildren = new Set<string>()

  // Internal state

  let isDisposed = true
  let preventShow = false
  let showFrameLocked = false
  let hideInProgress = false
  let scheduleTimer: ReturnType<typeof setTimeout>
  let disposeTimer: ReturnType<typeof setTimeout>

  // DOM nodes (resolved in init)

  let referenceNode: Element
  let targetNodes: Element[] = []
  let popperNode: HTMLElement
  let innerNode: HTMLElement
  let arrowNode: HTMLElement

  const events = new EventListeners()
  let context: PopperContext | null = null
  let trackingMouse = false

  // usePopper only runs inside a component setup, so the instance exists.
  const vm = getCurrentInstance()!
  const attrs = useAttrs()

  const parentPopper = inject<{ parentPopper: PopperController } | null>(PROVIDE_KEY, null)?.parentPopper ?? null

  const controller: PopperController = {
    randomId,
    get theme () { return props.theme },
    get showGroup () { return props.showGroup },
    get autoHide () { return props.autoHide },
    get instantMove () { return props.instantMove },
    parentPopper,
    lockedChild: null,
    lockedChildTimer: null,
    shownChildren,
    pendingHide: false,
    mouseDownContains: false,
    containsGlobalTarget: false,
    get lastAutoHide () { return lastAutoHide.value },
    set lastAutoHide (value) { lastAutoHide.value = value },
    popperNode: () => props.popperNode(),
    hide,
    applyHide,
    computePosition: () => { computePos() },
    handleGlobalClose,
    emitCloseGroup: () => emit('close-group'),
  }

  provide(PROVIDE_KEY, {
    parentPopper: controller,
  })

  // Computed

  const popperId = computed(() => props.ariaId ?? randomId)

  const shouldMountContent = computed(() => props.eagerMount || isMounted.value)

  const hasPopperShowTriggerHover = computed(() =>
    props.popperTriggers?.includes('hover') ||
    (Array.isArray(props.popperShowTriggers) && props.popperShowTriggers.includes('hover')),
  )

  const slotData = computed(() => ({
    popperId: popperId.value,
    isShown: isShown.value,
    shouldMountContent: shouldMountContent.value,
    skipTransition: skipTransition.value,
    autoHide: typeof props.autoHide === 'function' ? lastAutoHide.value : props.autoHide,
    show,
    hide,
    handleResize: props.handleResize,
    onResize,
    classes: {
      ...classes,
      popperClass: props.popperClass,
    },
    result: props.positioningDisabled ? null : result,
    attrs,
  }))

  // Show / hide

  function show ({ skipDelay = false, force = false }: { event?: Event, skipDelay?: boolean, force?: boolean } = {}) {
    if (parentPopper?.lockedChild && parentPopper.lockedChild !== controller) { return }

    controller.pendingHide = false
    if (force || !props.disabled) {
      if (parentPopper?.lockedChild === controller) {
        parentPopper.lockedChild = null
      }

      scheduleShow(skipDelay)
      emit('show')

      // Prevent hiding with global handler
      showFrameLocked = true
      requestAnimationFrame(() => {
        showFrameLocked = false
      })
    }
    emit('update:shown', true)
  }

  function hide ({ skipDelay = false }: { event?: Event, skipDelay?: boolean } = {}) {
    if (hideInProgress) { return }

    // Abort if child is shown
    if (shownChildren.size > 0) {
      controller.pendingHide = true
      return
    }

    // Abort if aiming for the popper
    if (hasPopperShowTriggerHover.value && isAimingPopper(referenceNode, popperNode)) {
      if (parentPopper) {
        parentPopper.lockedChild = controller
        if (parentPopper.lockedChildTimer) {
          clearTimeout(parentPopper.lockedChildTimer)
        }
        parentPopper.lockedChildTimer = setTimeout(() => {
          if (parentPopper.lockedChild === controller) {
            parentPopper.lockedChild.hide({ skipDelay })
            parentPopper.lockedChild = null
          }
        }, 1000)
      }
      return
    }
    if (parentPopper?.lockedChild === controller) {
      parentPopper.lockedChild = null
    }

    controller.pendingHide = false
    scheduleHide(skipDelay)

    emit('hide')
    emit('update:shown', false)
  }

  // Lifecycle

  function init () {
    if (!isDisposed) { return }
    isDisposed = false
    isMounted.value = false
    preventShow = false

    // Nodes
    referenceNode = props.referenceNode?.() ?? vm.proxy!.$el
    targetNodes = props.targetNodes().filter(e => e.nodeType === e.ELEMENT_NODE)
    popperNode = props.popperNode()
    // These nodes are always present in the popper content template.
    innerNode = popperNode.querySelector<HTMLElement>('.v-popper__inner')!
    arrowNode = popperNode.querySelector<HTMLElement>('.v-popper__arrow-container')!

    swapTargetAttrs('title', 'data-original-title')

    detachPopperNode()

    context = acquirePopperContext()
    updateMouseTrackingInterest()

    if (props.triggers.length) {
      addEventListeners()
    }

    if (props.shown) {
      show()
    }
  }

  function dispose () {
    if (isDisposed) { return }
    isDisposed = true
    events.remove()
    hide({ skipDelay: true })
    detachPopperNode()

    isMounted.value = false
    isShown.value = false

    updateParentShownChildren(false)

    swapTargetAttrs('data-original-title', 'title')

    updateMouseTrackingInterest()
    if (context) {
      releasePopperContext()
      context = null
    }
  }

  async function onResize () {
    if (isShown.value) {
      await computePos()
      emit('resize')
    }
  }

  // Positioning

  async function computePos () {
    if (isDisposed || props.positioningDisabled) { return }

    const options = buildPositionOptions({
      strategy: props.strategy,
      placement: props.placement,
      // numeric strings pass through like before the extraction
      distance: props.distance as number,
      skidding: props.skidding as number,
      boundary: props.boundary as Element,
      overflowPadding: props.overflowPadding as number,
      arrowPadding: props.arrowPadding as number,
      preventOverflow: props.preventOverflow,
      shift: props.shift,
      shiftCrossAxis: props.shiftCrossAxis,
      flip: props.flip,
      arrowOverflow: props.arrowOverflow,
      autoSize: props.autoSize ? props.autoSize : props.autoMinSize ? 'min' : false,
      autoBoundaryMaxSize: props.autoMaxSize || props.autoBoundaryMaxSize,
    }, arrowNode, innerNode)

    const data = await computePosition(referenceNode, popperNode, options)

    Object.assign(result, {
      x: data.x,
      y: data.y,
      placement: data.placement,
      strategy: data.strategy,
      arrow: {
        ...data.middlewareData.arrow,
        ...data.middlewareData.arrowOverflow,
      },
    })
  }

  // Scheduling

  function scheduleShow (skipDelay = false) {
    updateParentShownChildren(true)
    hideInProgress = false
    clearTimeout(scheduleTimer)

    const hidingPopper = context?.hidingPopper
    if (hidingPopper && props.instantMove && hidingPopper.instantMove && hidingPopper !== parentPopper) {
      hidingPopper.applyHide(true)
      applyShow(true)
      return
    }

    if (skipDelay) {
      applyShow()
    } else {
      scheduleTimer = setTimeout(applyShow, computeDelay('show'))
    }
  }

  function scheduleHide (skipDelay = false) {
    if (shownChildren.size > 0) {
      controller.pendingHide = true
      return
    }
    updateParentShownChildren(false)
    hideInProgress = true
    clearTimeout(scheduleTimer)

    if (isShown.value && context) {
      context.hidingPopper = controller
    }

    if (skipDelay) {
      applyHide()
    } else {
      scheduleTimer = setTimeout(applyHide, computeDelay('hide'))
    }
  }

  function computeDelay (type: 'show' | 'hide') {
    const delay = props.delay as any // legacy loose delay parsing
    return parseInt((delay && delay[type]) || delay || 0)
  }

  async function applyShow (skipTransitionValue = false) {
    clearTimeout(disposeTimer)
    clearTimeout(scheduleTimer)
    skipTransition.value = skipTransitionValue

    // Already shown
    if (isShown.value) {
      return
    }

    ensureTeleport()
    await nextFrame()
    await computePos()
    await applyShowEffect()

    // Scroll
    if (!props.positioningDisabled) {
      events.add([
        ...getOverflowAncestors(referenceNode),
        ...getOverflowAncestors(popperNode),
      ], 'scroll', () => {
        computePos()
      })
    }
  }

  async function applyShowEffect () {
    if (hideInProgress) { return }

    // Advanced animations
    if (props.computeTransformOrigin) {
      const bounds = referenceNode.getBoundingClientRect()
      // the wrapper is always present in the popper content template
      const popperWrapper = popperNode.querySelector<HTMLElement>('.v-popper__wrapper')!
      // the wrapper's parent is the popper element
      const parentBounds = (popperWrapper.parentNode as Element).getBoundingClientRect()
      const x = (bounds.x + bounds.width / 2) - (parentBounds.left + popperWrapper.offsetLeft)
      const y = (bounds.y + bounds.height / 2) - (parentBounds.top + popperWrapper.offsetTop)
      result.transformOrigin = `${x}px ${y}px`
    }

    isShown.value = true

    applyAttrsToTarget({
      'aria-describedby': popperId.value,
      'data-popper-shown': '',
    })

    context?.markShown(controller)

    emit('apply-show')

    // Advanced classes
    classes.showFrom = true
    classes.showTo = false
    classes.hideFrom = false
    classes.hideTo = false
    await nextFrame()
    classes.showFrom = false
    classes.showTo = true
    if (!props.noAutoFocus) { popperNode.focus() }
  }

  async function applyHide (skipTransitionValue = false) {
    if (shownChildren.size > 0) {
      controller.pendingHide = true
      hideInProgress = false
      return
    }
    clearTimeout(scheduleTimer)

    // Already hidden
    if (!isShown.value) {
      return
    }

    skipTransition.value = skipTransitionValue
    context?.markHidden(controller)

    isShown.value = false

    applyAttrsToTarget({
      'aria-describedby': undefined,
      'data-popper-shown': undefined,
    })

    clearTimeout(disposeTimer)
    const disposeTime = props.disposeTimeout
    if (disposeTime !== null) {
      disposeTimer = setTimeout(() => {
        if (popperNode) {
          // Don't remove popper instance, just the HTML element
          detachPopperNode()
          isMounted.value = false
        }
      }, disposeTime)
    }

    events.remove('scroll')

    emit('apply-hide')

    // Advanced classes
    classes.showFrom = false
    classes.showTo = false
    classes.hideFrom = true
    classes.hideTo = false
    await nextFrame()
    classes.hideFrom = false
    classes.hideTo = true
  }

  function autoShowHide () {
    if (props.shown) {
      show()
    } else {
      hide()
    }
  }

  // Teleport

  function ensureTeleport () {
    if (isDisposed) { return }

    let container: Element | ParentNode | null
    if (typeof props.container === 'string') {
      // if container is a query, get the relative element
      container = window.document.querySelector(props.container)
    } else if (props.container === false) {
      // if container is `false`, set it to reference parent
      container = targetNodes[0].parentNode
    } else {
      container = typeof props.container === 'boolean' ? null : props.container
    }

    if (!container) {
      throw new Error(`No container for popover: ${props.container}`)
    }

    container.appendChild(popperNode)
    isMounted.value = true
  }

  // Trigger events

  function addEventListeners () {
    // Add trigger show events

    const handleShow = (event: PopperEvent) => {
      if (isShown.value && !hideInProgress) {
        return
      }
      event.usedByTooltip = true
      // Prevent open on mobile touch in global close
      !preventShow && show({ event })
    }

    events.addTriggers(targetNodes, SHOW_EVENT_MAP, props.triggers, props.showTriggers, handleShow)
    events.addTriggers([popperNode], SHOW_EVENT_MAP, props.popperTriggers, props.popperShowTriggers, handleShow)

    // Add trigger hide events

    const handleHide = (event: PopperEvent) => {
      if (event.usedByTooltip) {
        return
      }
      hide({ event })
    }

    events.addTriggers(targetNodes, HIDE_EVENT_MAP, props.triggers, props.hideTriggers, handleHide)
    events.addTriggers([popperNode], HIDE_EVENT_MAP, props.popperTriggers, props.popperHideTriggers, handleHide)
  }

  function refreshListeners () {
    if (!isDisposed) {
      events.remove()
      addEventListeners()
      updateMouseTrackingInterest()
    }
  }

  function updateMouseTrackingInterest () {
    const wanted = !isDisposed && hasPopperShowTriggerHover.value
    if (wanted !== trackingMouse) {
      trackingMouse = wanted
      wanted ? acquireMouseTracking() : releaseMouseTracking()
    }
  }

  // Global close

  function handleGlobalClose (event: PopperEvent, touch: boolean) {
    if (showFrameLocked) { return }

    hide({ event })

    if (event.closePopover) {
      emit('close-directive')
    } else {
      emit('auto-hide')
    }

    if (touch) {
      preventShow = true
      setTimeout(() => {
        preventShow = false
      }, 300)
    }
  }

  // Target nodes attributes

  function detachPopperNode () {
    popperNode.parentNode && popperNode.parentNode.removeChild(popperNode)
  }

  function swapTargetAttrs (attrFrom: string, attrTo: string) {
    for (const el of targetNodes) {
      const value = el.getAttribute(attrFrom)
      if (value) {
        el.removeAttribute(attrFrom)
        el.setAttribute(attrTo, value)
      }
    }
  }

  function applyAttrsToTarget (attrsToApply: Record<string, string | undefined>) {
    for (const el of targetNodes) {
      for (const n in attrsToApply) {
        const value = attrsToApply[n]
        if (value == null) {
          el.removeAttribute(n)
        } else {
          el.setAttribute(n, value)
        }
      }
    }
  }

  // Nested poppers

  function updateParentShownChildren (value: boolean) {
    let parent = parentPopper
    while (parent) {
      if (value) {
        parent.shownChildren.add(randomId)
      } else {
        parent.shownChildren.delete(randomId)

        if (parent.pendingHide) {
          parent.hide()
        }
      }
      parent = parent.parentPopper
    }
  }

  // Watchers

  watch(() => props.shown, autoShowHide)

  watch(() => props.disabled, (value) => {
    if (value) {
      dispose()
    } else {
      init()
    }
  })

  watch(() => props.container, async () => {
    if (isShown.value) {
      ensureTeleport()
      await computePos()
    }
  })

  watch(() => props.triggers, refreshListeners, { deep: true })

  watch(() => props.positioningDisabled, refreshListeners)

  watch([
    () => props.placement,
    () => props.distance,
    () => props.skidding,
    () => props.boundary,
    () => props.strategy,
    () => props.overflowPadding,
    () => props.arrowPadding,
    () => props.preventOverflow,
    () => props.shift,
    () => props.shiftCrossAxis,
    () => props.flip,
  ], () => computePos())

  // Component lifecycle

  onMounted(() => {
    init()
    detachPopperNode()
  })

  onActivated(autoShowHide)

  onDeactivated(() => {
    hide()
  })

  onBeforeUnmount(dispose)

  return {
    show,
    hide,
    dispose,
    onResize,
    slotData,
  }
}
