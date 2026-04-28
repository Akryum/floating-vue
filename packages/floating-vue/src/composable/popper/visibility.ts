import { getOverflowAncestors } from '@floating-ui/dom'
import { nextFrame } from '../../util/frame'
import { applyAttrsToTarget, detachPopperNode, ensureTeleport } from './dom'
import { installFocusTrap, installMenuKeyboardNav, pickRestoreTarget } from './focus'
import { registerEventListeners, removePopperEventListeners } from './listeners'
import { isAimingPopper } from './mouse'
import { computePopperPosition } from './positioning'
import {
  getHidingPopper,
  getShownPoppers,
  registerShownPopper,
  setHidingPopper,
  unregisterShownPopper,
} from './registry'
import type { PopperApi, PopperMethodOptions } from './types'

/**
 * Public show method for a popper instance.
 */
export function showPopper (api: PopperApi, { event = null, skipDelay = false, force = false }: PopperMethodOptions = {}) {
  const parent = api.parentPopper
  if (parent?.runtime.lockedChild && parent.runtime.lockedChild !== api) return

  // Capture focus owner before any internal focus moves so restoreFocus can return to it.
  if (api.props.restoreFocus && typeof document !== 'undefined' && !api.runtime.previousFocus) {
    api.runtime.previousFocus = document.activeElement
  }

  api.state.pendingHide = false
  if (force || !api.props.disabled) {
    if (parent?.runtime.lockedChild === api) {
      parent.runtime.lockedChild = null
    }

    scheduleShow(api, event, skipDelay)
    api.emit('show')

    api.runtime.showFrameLocked = true
    requestAnimationFrame(() => {
      api.runtime.showFrameLocked = false
    })
  }
  api.emit('update:shown', true)
}

/**
 * Public hide method for a popper instance.
 */
export function hidePopper (api: PopperApi, { event = null, skipDelay = false }: PopperMethodOptions = {}) {
  if (api.runtime.hideInProgress) return

  if (api.state.shownChildren.size > 0) {
    api.state.pendingHide = true
    return
  }

  if (hasPopperShowTriggerHover(api) && isAimingPopper(api.runtime.nodes.referenceNode, api.runtime.nodes.popperNode)) {
    lockParentChild(api, skipDelay)
    return
  }

  if (api.parentPopper?.runtime.lockedChild === api) {
    api.parentPopper.runtime.lockedChild = null
  }

  api.state.pendingHide = false
  scheduleHide(api, event, skipDelay)

  api.emit('hide')
  api.emit('update:shown', false)
}

/**
 * Schedules delayed show behavior.
 */
function scheduleShow (api: PopperApi, _event: Event | null, skipDelay = false) {
  updateParentShownChildren(api, true)
  api.runtime.hideInProgress = false
  clearTimer(api, 'scheduleTimer')

  const hidingPopper = getHidingPopper()
  if (hidingPopper && api.props.instantMove && hidingPopper.props.instantMove && hidingPopper !== api.parentPopper) {
    applyHide(hidingPopper, true)
    applyShow(api, true)
    return
  }

  if (skipDelay) {
    applyShow(api)
  } else {
    api.runtime.scheduleTimer = setTimeout(() => applyShow(api), computeDelay(api, 'show'))
  }
}

/**
 * Schedules delayed hide behavior.
 */
function scheduleHide (api: PopperApi, _event: Event | null, skipDelay = false) {
  if (api.state.shownChildren.size > 0) {
    api.state.pendingHide = true
    return
  }
  updateParentShownChildren(api, false)
  api.runtime.hideInProgress = true
  clearTimer(api, 'scheduleTimer')

  if (api.state.isShown) {
    setHidingPopper(api)
  }

  if (skipDelay) {
    applyHide(api)
  } else {
    api.runtime.scheduleTimer = setTimeout(() => applyHide(api), computeDelay(api, 'hide'))
  }
}

/**
 * Applies show after any configured delay.
 */
async function applyShow (api: PopperApi, skipTransition = false) {
  clearTimer(api, 'disposeTimer')
  clearTimer(api, 'scheduleTimer')
  api.state.skipTransition = skipTransition

  if (api.state.isShown) return

  ensureTeleport(api)
  await nextFrame()
  await computePopperPosition(api)
  await applyShowEffect(api)

  const { referenceNode, popperNode } = api.runtime.nodes
  if (!api.props.positioningDisabled && referenceNode && popperNode) {
    registerEventListeners(api, [
      ...getOverflowAncestors(referenceNode),
      ...getOverflowAncestors(popperNode),
    ], 'scroll', () => {
      computePopperPosition(api)
    })
  }
}

/**
 * Applies state, attrs, classes, and focus once the popper is ready to show.
 */
async function applyShowEffect (api: PopperApi) {
  if (api.runtime.hideInProgress) return

  if (api.props.computeTransformOrigin) {
    computeTransformOrigin(api)
  }

  api.state.isShown = true
  applyAttrsToTarget(api, {
    'aria-describedby': api.popperId.value,
    'data-popper-shown': '',
  })

  const showGroup = api.props.showGroup
  if (showGroup) {
    // Clone before hiding because hide mutates the registry.
    for (const popover of getShownPoppers()) {
      if (popover.props.showGroup !== showGroup) {
        popover.hide()
        popover.emit('close-group')
      }
    }
  }

  registerShownPopper(api)
  installFocusBehaviors(api)
  api.emit('apply-show')

  api.state.classes.showFrom = true
  api.state.classes.showTo = false
  api.state.classes.hideFrom = false
  api.state.classes.hideTo = false
  await nextFrame()
  api.state.classes.showFrom = false
  api.state.classes.showTo = true
  if (!api.props.noAutoFocus) {
    api.runtime.nodes.popperNode?.focus()
  }
}

/**
 * Installs focus trap and menu keyboard navigation handlers based on props.
 * The cleanups run on hide via teardownFocusBehaviors.
 */
function installFocusBehaviors (api: PopperApi) {
  const popperNode = api.runtime.nodes.popperNode
  if (!popperNode) return

  if (api.props.focusTrap) {
    api.runtime.focusCleanups.push(installFocusTrap(popperNode))
  }
  if (api.props.ariaRole === 'menu') {
    api.runtime.focusCleanups.push(installMenuKeyboardNav(popperNode))
  }
}

/**
 * Runs and clears any installed focus handlers, then optionally restores focus
 * to the previously-focused element.
 */
function teardownFocusBehaviors (api: PopperApi) {
  for (const cleanup of api.runtime.focusCleanups) cleanup()
  api.runtime.focusCleanups = []

  if (api.props.restoreFocus) {
    const target = pickRestoreTarget(api.runtime.previousFocus)
    if (target) target.focus()
  }
  api.runtime.previousFocus = null
}

/**
 * Applies hidden state and schedules optional DOM detach.
 */
async function applyHide (api: PopperApi, skipTransition = false) {
  if (api.state.shownChildren.size > 0) {
    api.state.pendingHide = true
    api.runtime.hideInProgress = false
    return
  }
  clearTimer(api, 'scheduleTimer')

  if (!api.state.isShown) return

  api.state.skipTransition = skipTransition
  unregisterShownPopper(api)

  if (getHidingPopper() === api) {
    setHidingPopper(null)
  }

  api.state.isShown = false
  applyAttrsToTarget(api, {
    'aria-describedby': undefined,
    'data-popper-shown': undefined,
  })

  scheduleDispose(api)
  removePopperEventListeners(api, 'scroll')
  teardownFocusBehaviors(api)
  api.emit('apply-hide')

  api.state.classes.showFrom = false
  api.state.classes.showTo = false
  api.state.classes.hideFrom = true
  api.state.classes.hideTo = false
  await nextFrame()
  api.state.classes.hideFrom = false
  api.state.classes.hideTo = true
}

/**
 * Updates parent poppers when nested poppers show or hide.
 */
export function updateParentShownChildren (api: PopperApi, value: boolean) {
  let parent = api.parentPopper
  while (parent) {
    if (value) {
      parent.state.shownChildren.add(api.state.randomId)
    } else {
      parent.state.shownChildren.delete(api.state.randomId)
      if (parent.state.pendingHide) {
        parent.hide()
      }
    }
    parent = parent.parentPopper
  }
}

function computeDelay (api: PopperApi, type: 'show' | 'hide') {
  const delay = api.props.delay
  return parseInt(String((delay && typeof delay === 'object' ? delay[type] : delay) || 0))
}

function lockParentChild (api: PopperApi, skipDelay: boolean) {
  const parent = api.parentPopper
  if (!parent) return

  parent.runtime.lockedChild = api
  clearTimer(parent, 'lockedChildTimer')
  parent.runtime.lockedChildTimer = setTimeout(() => {
    if (parent.runtime.lockedChild === api) {
      parent.runtime.lockedChild.hide({ skipDelay })
      parent.runtime.lockedChild = null
    }
  }, 1000)
}

function hasPopperShowTriggerHover (api: PopperApi) {
  return api.props.popperTriggers?.includes('hover') ||
    (Array.isArray(api.props.popperShowTriggers) && api.props.popperShowTriggers.includes('hover'))
}

function computeTransformOrigin (api: PopperApi) {
  const referenceNode = api.runtime.nodes.referenceNode
  const popperWrapper = api.runtime.nodes.popperNode?.querySelector('.v-popper__wrapper') as HTMLElement
  if (!referenceNode || !popperWrapper) return

  const bounds = referenceNode.getBoundingClientRect()
  const parentBounds = (popperWrapper.parentNode as HTMLElement).getBoundingClientRect()
  const x = (bounds.x + bounds.width / 2) - (parentBounds.left + popperWrapper.offsetLeft)
  const y = (bounds.y + bounds.height / 2) - (parentBounds.top + popperWrapper.offsetTop)
  api.state.result.transformOrigin = `${x}px ${y}px`
}

function scheduleDispose (api: PopperApi) {
  clearTimer(api, 'disposeTimer')
  const disposeTime = api.props.disposeTimeout
  if (disposeTime !== null) {
    api.runtime.disposeTimer = setTimeout(() => {
      if (api.runtime.nodes.popperNode) {
        detachPopperNode(api)
        api.state.isMounted = false
      }
    }, disposeTime)
  }
}

function clearTimer (api: PopperApi, key: 'scheduleTimer' | 'disposeTimer' | 'lockedChildTimer') {
  if (api.runtime[key]) {
    clearTimeout(api.runtime[key])
    api.runtime[key] = null
  }
}
