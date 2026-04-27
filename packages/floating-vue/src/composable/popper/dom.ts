import type { PopperApi } from './types'

/**
 * Resolves the container element for a popper instance.
 */
export function resolveContainer (api: PopperApi): Element {
  let container = api.props.container

  if (typeof container === 'string') {
    container = window.document.querySelector(container) as Element
  } else if (container === false) {
    container = api.runtime.nodes.targetNodes[0]?.parentNode as Element
  }

  if (!container) {
    throw new Error('No container for popover: ' + api.props.container)
  }

  return container as Element
}

/**
 * Moves the popper DOM node into its configured container.
 */
export function ensureTeleport (api: PopperApi) {
  if (api.state.isDisposed) return

  if (!api.runtime.nodes.popperNode) {
    resolvePopperNodes(api, api.runtime.nodes.referenceNode)
  }

  const popperNode = api.runtime.nodes.popperNode
  if (!popperNode) return

  resolveContainer(api).appendChild(popperNode)
  api.state.isMounted = true
}

/**
 * Removes the popper DOM node from its current parent.
 */
export function detachPopperNode (api: PopperApi) {
  const popperNode = api.runtime.nodes.popperNode
  if (popperNode?.parentNode) {
    popperNode.parentNode.removeChild(popperNode)
  }
}

/**
 * Swaps an attribute between every target node.
 */
export function swapTargetAttrs (api: PopperApi, attrFrom: string, attrTo: string) {
  for (const el of api.runtime.nodes.targetNodes) {
    const value = el.getAttribute(attrFrom)
    if (value) {
      el.removeAttribute(attrFrom)
      el.setAttribute(attrTo, value)
    }
  }
}

/**
 * Applies or removes target attributes.
 */
export function applyAttrsToTarget (api: PopperApi, attrs: Record<string, string | undefined>) {
  for (const el of api.runtime.nodes.targetNodes) {
    for (const name in attrs) {
      const value = attrs[name]
      if (value == null) {
        el.removeAttribute(name)
      } else {
        el.setAttribute(name, value)
      }
    }
  }
}

/**
 * Refreshes cached DOM node references.
 */
export function resolvePopperNodes (api: PopperApi, fallbackReference: Element | null) {
  const popperNode = api.props.popperNode()
  const targetNodes = api.props.targetNodes().filter(e => e.nodeType === e.ELEMENT_NODE)

  api.runtime.nodes.referenceNode = api.props.referenceNode?.() ?? targetNodes[0] ?? fallbackReference
  api.runtime.nodes.targetNodes = targetNodes
  api.runtime.nodes.popperNode = popperNode
  api.runtime.nodes.innerNode = popperNode?.querySelector('.v-popper__inner') ?? null
  api.runtime.nodes.arrowNode = popperNode?.querySelector('.v-popper__arrow-container') ?? null
}
