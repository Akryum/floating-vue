import { supportsPassive } from '../../util/env'
import { HIDE_EVENT_MAP, SHOW_EVENT_MAP } from '../../util/events'
import type { PopperApi, PopperEvent } from './types'

/**
 * Registers a DOM event listener and tracks it for cleanup.
 */
export function registerEventListeners (
  api: PopperApi,
  targetNodes: EventTarget[],
  eventType: string,
  handler: (event: Event) => void,
) {
  api.runtime.events.push({ targetNodes, eventType, handler })
  targetNodes.forEach(node => node.addEventListener(eventType, handler, supportsPassive
    ? {
      passive: true,
    }
    : undefined))
}

/**
 * Registers all configured trigger listeners on reference and popper nodes.
 */
export function addPopperEventListeners (api: PopperApi) {
  const handleShow = (event: PopperEvent) => {
    if (api.state.isShown && !api.runtime.hideInProgress) return

    event.usedByTooltip = true
    if (!api.runtime.preventShow) {
      api.show({ event })
    }
  }

  registerTriggerListeners(api, api.runtime.nodes.targetNodes, SHOW_EVENT_MAP, api.props.triggers, api.props.showTriggers, handleShow)
  registerTriggerListeners(api, [api.runtime.nodes.popperNode].filter(Boolean) as Element[], SHOW_EVENT_MAP, api.props.popperTriggers, api.props.popperShowTriggers, handleShow)

  const handleHide = (event: PopperEvent) => {
    if (event.usedByTooltip) return
    api.hide({ event })
  }

  registerTriggerListeners(api, api.runtime.nodes.targetNodes, HIDE_EVENT_MAP, api.props.triggers, api.props.hideTriggers, handleHide)
  registerTriggerListeners(api, [api.runtime.nodes.popperNode].filter(Boolean) as Element[], HIDE_EVENT_MAP, api.props.popperTriggers, api.props.popperHideTriggers, handleHide)
}

/**
 * Removes event listeners, optionally filtering by event type.
 */
export function removePopperEventListeners (api: PopperApi, filterEventType?: string) {
  const newList = []
  api.runtime.events.forEach(listener => {
    const { targetNodes, eventType, handler } = listener
    if (!filterEventType || filterEventType === eventType) {
      targetNodes.forEach(node => node.removeEventListener(eventType, handler))
    } else {
      newList.push(listener)
    }
  })
  api.runtime.events = newList
}

/**
 * Rebuilds trigger listeners after trigger-related props change.
 */
export function refreshPopperEventListeners (api: PopperApi) {
  if (api.state.isDisposed) return

  removePopperEventListeners(api)
  addPopperEventListeners(api)
}

/**
 * Applies trigger overrides and registers matching DOM events.
 */
function registerTriggerListeners (
  api: PopperApi,
  targetNodes: EventTarget[],
  eventMap: Record<string, string>,
  commonTriggers,
  customTrigger,
  handler: (event: Event) => void,
) {
  let triggers = commonTriggers

  if (customTrigger != null) {
    triggers = typeof customTrigger === 'function' ? customTrigger(triggers) : customTrigger
  }

  triggers?.forEach(trigger => {
    const eventType = eventMap[trigger]
    if (eventType) {
      registerEventListeners(api, targetNodes, eventType, handler)
    }
  })
}
