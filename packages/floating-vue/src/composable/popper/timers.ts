import { applyHide, applyShow, clearTimer } from './effects'
import { getHidingPopper, setHidingPopper } from './registry'
import { updateParentShownChildren } from './visibility'
import type { PopperApi } from './types'

/**
 * Resolves the show or hide delay (ms) for the current popper props.
 * Supports both number and `{ show, hide }` object forms.
 */
export function computeDelay (api: PopperApi, type: 'show' | 'hide') {
  const delay = api.props.delay
  return parseInt(String((delay && typeof delay === 'object' ? delay[type] : delay) || 0))
}

/**
 * Schedules the show effect, honoring the configured delay and the
 * instant-move shortcut between two poppers that opt into it.
 */
export function scheduleShow (api: PopperApi, _event: Event | null, skipDelay = false) {
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
 * Schedules the hide effect, honoring the configured delay and deferring when
 * a child popper is still open.
 */
export function scheduleHide (api: PopperApi, _event: Event | null, skipDelay = false) {
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
