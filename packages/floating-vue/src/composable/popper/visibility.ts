import { clearTimer } from './effects'
import { isAimingPopper } from './mouse'
import { scheduleHide, scheduleShow } from './timers'
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

/**
 * Holds the parent popper open while the user is aiming toward this child,
 * so the parent does not auto-hide mid-traversal.
 */
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

/**
 * Returns true if any hover-based trigger is configured on the popper element.
 */
function hasPopperShowTriggerHover (api: PopperApi) {
  return api.props.popperTriggers?.includes('hover') ||
    (Array.isArray(api.props.popperShowTriggers) && api.props.popperShowTriggers.includes('hover'))
}
