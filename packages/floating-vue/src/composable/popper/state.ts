import { reactive } from 'vue'
import type { PopperProps, PopperRuntime, PopperState } from './types'

/**
 * Creates the reactive state used by a popper instance.
 */
export function createPopperState (props: PopperProps): PopperState {
  return reactive({
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
      strategy: props.strategy,
      arrow: {
        x: 0,
        y: 0,
        centerOffset: 0,
      },
      transformOrigin: null,
    },
    randomId: `popper_${[Math.random(), Date.now()].map(n => n.toString(36).substring(2, 10)).join('_')}`,
    shownChildren: new Set<string>(),
    lastAutoHide: true,
    pendingHide: false,
    containsGlobalTarget: false,
    isDisposed: true,
    mouseDownContains: false,
  })
}

/**
 * Creates non-reactive runtime holders for timers, listeners, and DOM nodes.
 */
export function createPopperRuntime (): PopperRuntime {
  return {
    events: [],
    nodes: {
      referenceNode: null,
      targetNodes: [],
      popperNode: null,
      innerNode: null,
      arrowNode: null,
    },
    scheduleTimer: null,
    disposeTimer: null,
    lockedChildTimer: null,
    lockedChild: null,
    preventShow: false,
    hideInProgress: false,
    showFrameLocked: false,
  }
}
