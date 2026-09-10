type Handler = (event: Event) => void

interface ListenerEntry {
  targetNodes: EventTarget[]
  eventType: string
  handler: Handler
}

/**
 * Registry of DOM event listeners so they can be removed in bulk
 * (all of them or by event type).
 */
export class EventListeners {
  private entries: ListenerEntry[] = []

  add (targetNodes: EventTarget[], eventType: string, handler: Handler) {
    this.entries.push({ targetNodes, eventType, handler })
    for (const node of targetNodes) {
      node.addEventListener(eventType, handler, { passive: true })
    }
  }

  addTriggers (
    targetNodes: EventTarget[],
    eventMap: Record<string, string>,
    commonTriggers: string[],
    customTrigger: string[] | ((triggers: string[]) => string[]) | null | undefined,
    handler: Handler,
  ) {
    let triggers = commonTriggers

    if (customTrigger != null) {
      triggers = typeof customTrigger === 'function' ? customTrigger(triggers) : customTrigger
    }

    for (const trigger of triggers) {
      const eventType = eventMap[trigger]
      if (eventType) {
        this.add(targetNodes, eventType, handler)
      }
    }
  }

  remove (filterEventType?: string) {
    this.entries = this.entries.filter(entry => {
      if (!filterEventType || filterEventType === entry.eventType) {
        for (const node of entry.targetNodes) {
          node.removeEventListener(entry.eventType, entry.handler)
        }
        return false
      }
      return true
    })
  }
}
