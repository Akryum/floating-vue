import { getOverflowAncestors } from '@floating-ui/dom'
import { nextFrame } from '../../util/frame'
import { applyAttrsToTarget, detachPopperNode, ensureTeleport } from './dom'
import { installFocusTrap, installMenuKeyboardNav, pickRestoreTarget } from './focus'
import { registerEventListeners, removePopperEventListeners } from './listeners'
import { computePopperPosition } from './positioning'
import {
  getHidingPopper,
  getShownPoppers,
  registerShownPopper,
  setHidingPopper,
  unregisterShownPopper,
} from './registry'
import type { PopperApi } from './types'

type TimerKey = 'scheduleTimer' | 'disposeTimer' | 'lockedChildTimer'

/**
 * Clears one of the named timers stored on the popper runtime.
 */
export function clearTimer (api: PopperApi, key: TimerKey) {
  if (api.runtime[key]) {
    clearTimeout(api.runtime[key] as ReturnType<typeof setTimeout>)
    api.runtime[key] = null
  }
}

/**
 * Mounts the popper, computes its position, and applies the show effect.
 *
 * Called either directly when `skipDelay` is true, or after the configured
 * show delay elapses.
 */
export async function applyShow (api: PopperApi, skipTransition = false) {
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
 * Applies hidden state, schedules optional DOM detach, and tears down focus
 * behaviors installed on show.
 */
export async function applyHide (api: PopperApi, skipTransition = false) {
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
 * Anchors the popper wrapper transform-origin to the center of the reference
 * element, enabling animations that originate at the trigger.
 */
function computeTransformOrigin (api: PopperApi) {
  const referenceNode = api.runtime.nodes.referenceNode
  const popperWrapper = api.runtime.nodes.popperNode?.querySelector('.v-popper__wrapper') as HTMLElement | null
  if (!referenceNode || !popperWrapper) return

  const bounds = referenceNode.getBoundingClientRect()
  const parentBounds = (popperWrapper.parentNode as HTMLElement).getBoundingClientRect()
  const x = (bounds.x + bounds.width / 2) - (parentBounds.left + popperWrapper.offsetLeft)
  const y = (bounds.y + bounds.height / 2) - (parentBounds.top + popperWrapper.offsetTop)
  api.state.result.transformOrigin = `${x}px ${y}px`
}

/**
 * Schedules detaching the popper DOM after the configured dispose delay.
 * `disposeTimeout: null` keeps the popper mounted indefinitely.
 */
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
