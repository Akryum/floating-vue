import { addPopperEventListeners, removePopperEventListeners } from './listeners'
import { computePopperPosition } from './positioning'
import { detachPopperNode, ensureTeleport, resolvePopperNodes, swapTargetAttrs } from './dom'
import { updateParentShownChildren } from './visibility'
import type { PopperApi } from './types'

/**
 * Initializes DOM nodes, listeners, attrs, and initial shown state.
 */
export function initPopper (api: PopperApi, fallbackReference: Element | null) {
  if (!api.state.isDisposed) return

  api.state.isDisposed = false
  api.state.isMounted = false
  api.runtime.events = []
  api.runtime.preventShow = false

  resolvePopperNodes(api, fallbackReference)
  swapTargetAttrs(api, 'title', 'data-original-title')
  detachPopperNode(api)

  if (api.props.triggers.length) {
    addPopperEventListeners(api)
  }

  if (api.props.shown) {
    api.show()
  }
}

/**
 * Disposes listeners and DOM state without destroying the Vue component.
 */
export function disposePopper (api: PopperApi) {
  if (api.state.isDisposed) return

  api.state.isDisposed = true
  removePopperEventListeners(api)
  api.hide({ skipDelay: true })
  detachPopperNode(api)

  api.state.isMounted = false
  api.state.isShown = false
  updateParentShownChildren(api, false)
  swapTargetAttrs(api, 'data-original-title', 'title')
}

/**
 * Recomputes position and emits resize when the popper is visible.
 */
export async function resizePopper (api: PopperApi) {
  if (api.state.isShown) {
    await computePopperPosition(api)
    api.emit('resize')
  }
}

/**
 * Applies current shown prop to imperative visibility state.
 */
export function autoShowHidePopper (api: PopperApi) {
  if (api.props.shown) {
    api.show()
  } else {
    api.hide()
  }
}

/**
 * Re-resolves teleport container and recomputes position after container changes.
 */
export async function refreshPopperContainer (api: PopperApi) {
  if (api.state.isShown) {
    ensureTeleport(api)
    await computePopperPosition(api)
  }
}
