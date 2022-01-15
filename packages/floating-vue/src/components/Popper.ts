import { defineComponent } from 'vue'
import {
  autoPlacement,
  computePosition,
  offset,
  shift,
  flip,
  arrow,
  getScrollParents,
  size,
} from '@floating-ui/dom'
import { supportsPassive, isIOS } from '../util/env'
import { placements, Placement } from '../util/popper'
import { SHOW_EVENT_MAP, HIDE_EVENT_MAP } from '../util/events'
import { removeFromArray } from '../util/lang'
import { nextFrame } from '../util/frame'
import { getDefaultConfig } from '../config'

export type ComputePositionConfig = Parameters<typeof computePosition>[2]

const shownPoppers = []
let hidingPopper = null

let Element: any = function () {}
if (typeof window !== 'undefined') {
  Element = window.Element
}

function defaultPropFactory (prop: string) {
  return function (props) {
    return getDefaultConfig(props.theme, prop)
  }
}

export default () => defineComponent({
  name: 'VPopper',

  props: {
    theme: {
      type: String,
      required: true,
    },

    targetNodes: {
      type: Function,
      required: true,
    },

    referenceNode: {
      type: Function,
      required: true,
    },

    popperNode: {
      type: Function,
      required: true,
    },

    shown: {
      type: Boolean,
      default: false,
    },

    showGroup: {
      type: String,
      default: null,
    },

    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null,
    },

    disabled: {
      type: Boolean,
      default: defaultPropFactory('disabled'),
    },

    placement: {
      type: String,
      default: defaultPropFactory('placement'),
      validator: (value: Placement) => placements.includes(value),
    },

    delay: {
      type: [String, Number, Object],
      default: defaultPropFactory('delay'),
    },

    distance: {
      type: [Number, String],
      default: defaultPropFactory('distance'),
    },

    skidding: {
      type: [Number, String],
      default: defaultPropFactory('skidding'),
    },

    triggers: {
      type: Array,
      default: defaultPropFactory('triggers'),
    },

    showTriggers: {
      type: [Array, Function],
      default: defaultPropFactory('showTriggers'),
    },

    hideTriggers: {
      type: [Array, Function],
      default: defaultPropFactory('hideTriggers'),
    },

    popperTriggers: {
      type: Array,
      default: defaultPropFactory('popperTriggers'),
    },

    popperShowTriggers: {
      type: [Array, Function],
      default: defaultPropFactory('popperShowTriggers'),
    },

    popperHideTriggers: {
      type: [Array, Function],
      default: defaultPropFactory('popperHideTriggers'),
    },

    container: {
      type: [String, Object, Element, Boolean],
      default: defaultPropFactory('container'),
    },

    boundary: {
      type: [String, Element],
      default: defaultPropFactory('boundary'),
    },

    strategy: {
      type: String,
      validator: (value: string) => ['absolute', 'fixed'].includes(value),
      default: defaultPropFactory('strategy'),
    },

    autoHide: {
      type: Boolean,
      default: defaultPropFactory('autoHide'),
    },

    handleResize: {
      type: Boolean,
      default: defaultPropFactory('handleResize'),
    },

    instantMove: {
      type: Boolean,
      default: defaultPropFactory('instantMove'),
    },

    eagerMount: {
      type: Boolean,
      default: defaultPropFactory('eagerMount'),
    },

    popperClass: {
      type: [String, Array, Object],
      default: defaultPropFactory('popperClass'),
    },

    computeTransformOrigin: {
      type: Boolean,
      default: defaultPropFactory('computeTransformOrigin'),
    },

    autoMinSize: {
      type: Boolean,
      default: defaultPropFactory('autoMinSize'),
    },

    autoMaxSize: {
      type: Boolean,
      default: defaultPropFactory('autoMaxSize'),
    },

    preventOverflow: {
      type: Boolean,
      default: defaultPropFactory('preventOverflow'),
    },

    overflowPadding: {
      type: [Number, String],
      default: defaultPropFactory('overflowPadding'),
    },

    arrowPadding: {
      type: [Number, String],
      default: defaultPropFactory('arrowPadding'),
    },

    arrowOverflow: {
      type: Boolean,
      default: defaultPropFactory('arrowOverflow'),
    },

    flip: {
      type: Boolean,
      default: defaultPropFactory('flip'),
    },

    shift: {
      type: Boolean,
      default: defaultPropFactory('shift'),
    },

    shiftCrossAxis: {
      type: Boolean,
      default: defaultPropFactory('shiftCrossAxis'),
    },
  },

  emits: [
    'show',
    'hide',
    'update:shown',
    'apply-show',
    'apply-hide',
    'close-group',
    'close-directive',
    'auto-hide',
    'resize',
    'dispose',
  ],

  data () {
    return {
      isShown: false,
      isMounted: false,
      skipTransition: false,
      classes: {
        showFrom: false,
        showTo: false,
        hideFrom: false,
        hideTo: true,
      },
      result: {
        x: 0,
        y: 0,
        placement: '',
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0,
        },
        transformOrigin: null,
      },
    }
  },

  computed: {
    popperId () {
      return this.ariaId != null ? this.ariaId : this.randomId
    },

    shouldMountContent () {
      return this.eagerMount || this.isMounted
    },

    slotData () {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: {
          ...this.classes,
          popperClass: this.popperClass,
        },
        result: this.result,
      }
    },
  },

  watch: {
    shown: '$_autoShowHide',

    disabled (value) {
      if (value) {
        this.dispose()
      } else {
        this.init()
      }
    },

    async container () {
      if (this.isShown) {
        this.$_ensureTeleport()
        await this.$_computePosition()
      }
    },

    triggers () {
      if (!this.$_isDisposed) {
        this.$_removeEventListeners()
        this.$_addEventListeners()
      }
    },

    ...[
      'placement',
      'distance',
      'skidding',
      'boundary',
      'strategy',
      'overflowPadding',
      'arrowPadding',
      'preventOverflow',
      'shift',
      'shiftCrossAxis',
      'flip',
    ].reduce((acc, prop) => {
      acc[prop] = '$_computePosition'
      return acc
    }, {}),
  },

  created () {
    this.$_isDisposed = true
    this.randomId = `popper_${[Math.random(), Date.now()].map(n => n.toString(36).substring(2, 10)).join('_')}`
  },

  mounted () {
    this.init()
    this.$_detachPopperNode()
  },

  activated () {
    this.$_autoShowHide()
  },

  deactivated () {
    this.hide()
  },

  beforeUnmount () {
    this.dispose()
  },

  methods: {
    show ({ event = null, skipDelay = false, force = false } = {}) {
      if (force || !this.disabled) {
        this.$_scheduleShow(event, skipDelay)
        this.$emit('show')

        // Prevent hiding with global handler
        this.$_showFrameLocked = true
        requestAnimationFrame(() => {
          this.$_showFrameLocked = false
        })
      }
      this.$emit('update:shown', true)
    },

    hide ({ event = null, skipDelay = false } = {}) {
      this.$_scheduleHide(event, skipDelay)

      this.$emit('hide')
      this.$emit('update:shown', false)
    },

    init () {
      if (!this.$_isDisposed) return
      this.$_isDisposed = false
      this.isMounted = false
      this.$_events = []
      this.$_preventShow = false

      // Nodes
      this.$_referenceNode = this.referenceNode()
      this.$_targetNodes = this.targetNodes().filter(e => e.nodeType === e.ELEMENT_NODE)
      this.$_popperNode = this.popperNode()
      this.$_innerNode = this.$_popperNode.querySelector('.v-popper__inner')
      this.$_arrowNode = this.$_popperNode.querySelector('.v-popper__arrow-container')

      this.$_swapTargetAttrs('title', 'data-original-title')

      this.$_detachPopperNode()

      if (this.triggers.length) {
        this.$_addEventListeners()
      }

      if (this.shown) {
        this.show()
      }
    },

    dispose () {
      if (this.$_isDisposed) return
      this.$_isDisposed = true
      this.$_removeEventListeners()
      this.hide({ skipDelay: true })
      this.$_detachPopperNode()

      this.isMounted = false
      this.isShown = false

      this.$_swapTargetAttrs('data-original-title', 'title')

      this.$emit('dispose')
    },

    async onResize () {
      if (this.isShown) {
        await this.$_computePosition()
        this.$emit('resize')
      }
    },

    async $_computePosition () {
      if (this.$_isDisposed) return

      const options: ComputePositionConfig = {
        strategy: this.strategy,
        middleware: [],
      }

      // Offset
      if (this.distance || this.skidding) {
        options.middleware.push(offset({
          mainAxis: this.distance,
          crossAxis: this.skidding,
        }))
      }

      // Placement
      const isPlacementAuto = this.placement.startsWith('auto')
      if (isPlacementAuto) {
        options.middleware.push(autoPlacement({
          alignment: this.placement.split('-')[1] ?? '',
        }))
      } else {
        options.placement = this.placement
      }

      if (this.preventOverflow) {
        // Shift
        if (this.shift) {
          options.middleware.push(shift({
            padding: this.overflowPadding,
            boundary: this.boundary,
            crossAxis: this.shiftCrossAxis,
          }))
        }

        // Flip
        if (!isPlacementAuto && this.flip) {
          options.middleware.push(flip({
            padding: this.overflowPadding,
            boundary: this.boundary,
          }))
        }
      }

      // Arrow
      options.middleware.push(arrow({
        element: this.$_arrowNode,
        padding: this.arrowPadding,
      }))

      // Arrow overflow
      if (this.arrowOverflow) {
        options.middleware.push({
          name: 'arrowOverflow',
          fn: ({ placement, rects, middlewareData }) => {
            let overflow: boolean
            const { centerOffset } = middlewareData.arrow
            if (placement.startsWith('top') || placement.startsWith('bottom')) {
              overflow = Math.abs(centerOffset) > rects.reference.width / 2
            } else {
              overflow = Math.abs(centerOffset) > rects.reference.height / 2
            }
            return {
              data: {
                overflow,
              },
            }
          },
        })
      }

      // Auto min size for the popper inner
      if (this.autoMinSize) {
        options.middleware.push({
          name: 'autoMinSize',
          fn: ({ rects, placement, middlewareData }) => {
            if (middlewareData.autoMinSize?.skip) {
              return {}
            }
            let width: number
            let height: number
            if (placement.startsWith('top') || placement.startsWith('bottom')) {
              width = rects.reference.width
            } else {
              height = rects.reference.height
            }
            // Apply and re-compute
            this.$_innerNode.style.minWidth = width != null ? `${width}px` : null
            this.$_innerNode.style.minHeight = height != null ? `${height}px` : null
            return {
              data: {
                skip: true,
              },
              reset: {
                rects: true,
              },
            }
          },
        })
      }

      // Auto max size for the popper inner
      if (this.autoMaxSize) {
        options.middleware.push(size({
          boundary: this.boundary,
          padding: this.overflowPadding,
          apply: ({ width, height }) => {
            // Apply and re-compute
            this.$_innerNode.style.maxWidth = width != null ? `${width}px` : null
            this.$_innerNode.style.maxHeight = height != null ? `${height}px` : null
          },
        }))
      }

      const data = await computePosition(this.$_referenceNode, this.$_popperNode, options)

      Object.assign(this.result, {
        x: data.x,
        y: data.y,
        placement: data.placement,
        strategy: data.strategy,
        arrow: {
          ...data.middlewareData.arrow,
          ...data.middlewareData.arrowOverflow,
        },
      })
    },

    $_scheduleShow (event = null, skipDelay = false) {
      this.$_hideInProgress = false
      clearTimeout(this.$_scheduleTimer)

      if (hidingPopper && this.instantMove && hidingPopper.instantMove) {
        hidingPopper.$_applyHide(true)
        this.$_applyShow(true)
        return
      }

      if (skipDelay) {
        this.$_applyShow()
      } else {
        this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay('show'))
      }
    },

    $_scheduleHide (event = null, skipDelay = false) {
      this.$_hideInProgress = true
      clearTimeout(this.$_scheduleTimer)

      if (this.isShown) {
        hidingPopper = this
      }

      if (skipDelay) {
        this.$_applyHide()
      } else {
        this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay('hide'))
      }
    },

    $_computeDelay (type) {
      const delay = this.delay
      return parseInt((delay && delay[type]) || delay || 0)
    },

    async $_applyShow (skipTransition = false) {
      clearTimeout(this.$_disposeTimer)
      clearTimeout(this.$_scheduleTimer)
      this.skipTransition = skipTransition

      // Already shown
      if (this.isShown) {
        return
      }

      this.$_ensureTeleport()
      await nextFrame()
      await this.$_computePosition()
      await this.$_applyShowEffect()
    },

    async $_applyShowEffect () {
      if (this.$_hideInProgress) return

      // Advanced animations
      if (this.computeTransformOrigin) {
        const bounds = this.$_referenceNode.getBoundingClientRect()
        const popperWrapper = this.$_popperNode.querySelector('.v-popper__wrapper')
        const parentBounds = popperWrapper.parentNode.getBoundingClientRect()
        const x = (bounds.x + bounds.width / 2) - (parentBounds.left + popperWrapper.offsetLeft)
        const y = (bounds.y + bounds.height / 2) - (parentBounds.top + popperWrapper.offsetTop)
        this.result.transformOrigin = `${x}px ${y}px`
      }

      this.isShown = true

      this.$_applyAttrsToTarget({
        'aria-describedby': this.popperId,
        'data-popper-shown': '',
      })

      const showGroup = this.showGroup
      if (showGroup) {
        let popover
        for (let i = 0; i < shownPoppers.length; i++) {
          popover = shownPoppers[i]
          if (popover.showGroup !== showGroup) {
            popover.hide()
            popover.$emit('close-group')
          }
        }
      }

      shownPoppers.push(this)

      this.$emit('apply-show')

      // Advanced classes
      this.classes.showFrom = true
      this.classes.showTo = false
      this.classes.hideFrom = false
      this.classes.hideTo = false
      await nextFrame()
      this.classes.showFrom = false
      this.classes.showTo = true
    },

    async $_applyHide (skipTransition = false) {
      clearTimeout(this.$_scheduleTimer)

      // Already hidden
      if (!this.isShown) {
        return
      }

      this.skipTransition = skipTransition
      removeFromArray(shownPoppers, this)

      if (hidingPopper === this) {
        hidingPopper = null
      }

      this.isShown = false

      this.$_applyAttrsToTarget({
        'aria-describedby': undefined,
        'data-popper-shown': undefined,
      })

      clearTimeout(this.$_disposeTimer)
      const disposeTime = getDefaultConfig(this.theme, 'disposeTimeout')
      if (disposeTime !== null) {
        this.$_disposeTimer = setTimeout(() => {
          if (this.$_popperNode) {
            // Don't remove popper instance, just the HTML element
            this.$_detachPopperNode()
            this.isMounted = false
          }
        }, disposeTime)
      }

      this.$emit('apply-hide')

      // Advanced classes
      this.classes.showFrom = false
      this.classes.showTo = false
      this.classes.hideFrom = true
      this.classes.hideTo = false
      await nextFrame()
      this.classes.hideFrom = false
      this.classes.hideTo = true
    },

    $_autoShowHide () {
      if (this.shown) {
        this.show()
      } else {
        this.hide()
      }
    },

    $_ensureTeleport () {
      if (this.$_isDisposed) return

      let container = this.container
      // if container is a query, get the relative element
      if (typeof container === 'string') {
        container = window.document.querySelector(container)
      } else if (container === false) {
        // if container is `false`, set it to reference parent
        container = this.$_targetNodes[0].parentNode
      }

      if (!container) {
        throw new Error('No container for popover: ' + this.container)
      }

      container.appendChild(this.$_popperNode)
      this.isMounted = true
    },

    $_addEventListeners () {
      const addListeners = (targetNodes: any[], eventType: string, handler: (event: Event) => void) => {
        this.$_events.push({ targetNodes, eventType, handler })
        targetNodes.forEach(node => node.addEventListener(eventType, handler, supportsPassive
          ? {
            passive: true,
          }
          : undefined))
      }

      const addEvents = (targetNodes, eventMap, commonTriggers, customTrigger, handler) => {
        let triggers = commonTriggers

        if (customTrigger != null) {
          triggers = typeof customTrigger === 'function' ? customTrigger(triggers) : customTrigger
        }

        triggers.forEach(trigger => {
          const eventType = eventMap[trigger]
          if (eventType) {
            addListeners(targetNodes, eventType, handler)
          }
        })
      }

      // Add trigger show events

      const handleShow = event => {
        if (this.isShown && !this.$_hideInProgress) {
          return
        }
        event.usedByTooltip = true
        // Prevent open on mobile touch in global close
        !this.$_preventShow && this.show({ event })
      }

      addEvents(this.$_targetNodes, SHOW_EVENT_MAP, this.triggers, this.showTriggers, handleShow)
      addEvents([this.$_popperNode], SHOW_EVENT_MAP, this.popperTriggers, this.popperShowTriggers, handleShow)

      // Add trigger hide events

      const handleHide = event => {
        if (event.usedByTooltip) {
          return
        }
        this.hide({ event })
      }

      addEvents(this.$_targetNodes, HIDE_EVENT_MAP, this.triggers, this.hideTriggers, handleHide)
      addEvents([this.$_popperNode], HIDE_EVENT_MAP, this.popperTriggers, this.popperHideTriggers, handleHide)

      // Scroll
      addListeners([
        ...getScrollParents(this.$_referenceNode),
        ...getScrollParents(this.$_popperNode),
      ], 'scroll', () => {
        this.$_computePosition()
      })
    },

    $_removeEventListeners () {
      this.$_events.forEach(({ targetNodes, eventType, handler }) => {
        targetNodes.forEach(node => node.removeEventListener(eventType, handler))
      })
      this.$_events = []
    },

    $_handleGlobalClose (event, touch = false) {
      if (this.$_showFrameLocked) return

      this.hide({ event: event })

      if (event.closePopover) {
        this.$emit('close-directive')
      } else {
        this.$emit('auto-hide')
      }

      if (touch) {
        this.$_preventShow = true
        setTimeout(() => {
          this.$_preventShow = false
        }, 300)
      }
    },

    $_detachPopperNode () {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode)
    },

    $_swapTargetAttrs (attrFrom, attrTo) {
      for (const el of this.$_targetNodes) {
        const value = el.getAttribute(attrFrom)
        if (value) {
          el.removeAttribute(attrFrom)
          el.setAttribute(attrTo, value)
        }
      }
    },

    $_applyAttrsToTarget (attrs) {
      for (const el of this.$_targetNodes) {
        for (const n in attrs) {
          const value = attrs[n]
          if (value == null) {
            el.removeAttribute(n)
          } else {
            el.setAttribute(n, value)
          }
        }
      }
    },
  },

  render () {
    return this.$slots.default(this.slotData)
  },
})

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  if (isIOS) {
    document.addEventListener('touchstart', handleGlobalMousedown, supportsPassive
      ? {
        passive: true,
        capture: true,
      }
      : true)
    document.addEventListener('touchend', handleGlobalTouchend, supportsPassive
      ? {
        passive: true,
        capture: true,
      }
      : true)
  } else {
    window.addEventListener('mousedown', handleGlobalMousedown, true)
    window.addEventListener('click', handleGlobalClick, true)
  }
  window.addEventListener('resize', computePositionAllShownPoppers)
}

function handleGlobalMousedown (event) {
  for (let i = 0; i < shownPoppers.length; i++) {
    const popper = shownPoppers[i]
    const popperContent = popper.popperNode()
    popper.$_mouseDownContains = popperContent.contains(event.target)
  }
}

function handleGlobalClick (event) {
  handleGlobalClose(event)
}

function handleGlobalTouchend (event) {
  handleGlobalClose(event, true)
}

function handleGlobalClose (event, touch = false) {
  // Delay so that close directive has time to set values
  for (let i = 0; i < shownPoppers.length; i++) {
    const popper = shownPoppers[i]
    const popperContent = popper.popperNode()
    const contains = popper.$_mouseDownContains || popperContent.contains(event.target)
    requestAnimationFrame(() => {
      if (event.closeAllPopover || (event.closePopover && contains) || (popper.autoHide && !contains)) {
        popper.$_handleGlobalClose(event, touch)
      }
    })
  }
}

function computePositionAllShownPoppers (event) {
  for (let i = 0; i < shownPoppers.length; i++) {
    const popper = shownPoppers[i]
    popper.$_computePosition(event)
  }
}

export function hideAllPoppers () {
  for (let i = 0; i < shownPoppers.length; i++) {
    const popper = shownPoppers[i]
    popper.hide()
  }
}
