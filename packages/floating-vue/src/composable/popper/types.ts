import type { ComponentInternalInstance, ComputedRef, Ref } from 'vue'
import type { ComputePositionReturn, Strategy } from '@floating-ui/dom'
import type { Trigger } from '../../types/trigger'
import type { Placement } from '../../util/popper'

/**
 * User-facing arguments accepted by show/hide methods.
 */
export interface PopperMethodOptions {
  /** Browser event that caused the state change. */
  event?: Event | null
  /** Bypass configured show/hide delay. */
  skipDelay?: boolean
  /** Show even when the disabled option is true. */
  force?: boolean
}

/**
 * Event shape used by global close and directive coordination.
 */
export interface PopperEvent extends Event {
  /** Marks an event already consumed by a show trigger. */
  usedByTooltip?: boolean
  /** Force every parent/child popper to close. */
  closeAllPopover?: boolean
  /** Close only the current popper chain. */
  closePopover?: boolean
}

/**
 * Transition class flags consumed by PopperContent.
 */
export interface PopperClasses {
  /** First animation frame after showing starts. */
  showFrom: boolean
  /** Stable shown animation state. */
  showTo: boolean
  /** First animation frame after hiding starts. */
  hideFrom: boolean
  /** Stable hidden animation state. */
  hideTo: boolean
}

/**
 * Floating UI result normalized for templates.
 */
export interface PopperResult {
  /** Left coordinate in pixels. */
  x: number
  /** Top coordinate in pixels. */
  y: number
  /** Final placement selected by Floating UI. */
  placement: Placement | ''
  /** CSS positioning strategy. */
  strategy: Strategy
  /** Arrow position and overflow metadata. */
  arrow: Partial<ComputePositionReturn['middlewareData']['arrow']> & {
    overflow?: boolean
  }
  /** Optional transform origin for scale animations. */
  transformOrigin: string | null
}

/**
 * Event listener registered by a popper instance.
 */
export interface PopperListener {
  /** Nodes receiving the listener. */
  targetNodes: EventTarget[]
  /** DOM event name. */
  eventType: string
  /** Event callback. */
  handler: (event: Event) => void
}

/**
 * Mutable DOM nodes owned by a popper instance.
 */
export interface PopperNodes {
  /** Element used as Floating UI reference. */
  referenceNode: Element | null
  /** Elements that receive trigger listeners and ARIA attrs. */
  targetNodes: Element[]
  /** Floating root element. */
  popperNode: HTMLElement | null
  /** Inner element used for auto sizing. */
  innerNode: HTMLElement | null
  /** Arrow container element. */
  arrowNode: HTMLElement | null
}

/**
 * Private mutable state shared across popper modules.
 */
export interface PopperState {
  /** Current rendered visibility. */
  isShown: boolean
  /** Whether popper DOM content is mounted in its container. */
  isMounted: boolean
  /** Whether transitions should be skipped for instant move. */
  skipTransition: boolean
  /** Transition class flags. */
  classes: PopperClasses
  /** Floating UI position result. */
  result: PopperResult
  /** Stable random ID used when ariaId is absent. */
  randomId: string
  /** IDs of open nested poppers. */
  shownChildren: Set<string>
  /** Last result returned by functional autoHide. */
  lastAutoHide: boolean
  /** Hide requested while a child popper is still open. */
  pendingHide: boolean
  /** Whether latest global target was inside this popper. */
  containsGlobalTarget: boolean
  /** Whether this instance has been disposed. */
  isDisposed: boolean
  /** Whether the last pointer down started inside this popper. */
  mouseDownContains: boolean
}

/**
 * Non-reactive runtime handles for timers, listeners, and DOM nodes.
 */
export interface PopperRuntime {
  /** Registered DOM listeners. */
  events: PopperListener[]
  /** Cached DOM nodes. */
  nodes: PopperNodes
  /** Timer for delayed show/hide. */
  scheduleTimer: ReturnType<typeof setTimeout> | null
  /** Timer for delayed DOM detach. */
  disposeTimer: ReturnType<typeof setTimeout> | null
  /** Timer that releases a locked child popper. */
  lockedChildTimer: ReturnType<typeof setTimeout> | null
  /** Child currently protected by hover aim. */
  lockedChild: PopperApi | null
  /** Prevents touch close from immediately reopening. */
  preventShow: boolean
  /** Prevents repeated hide scheduling. */
  hideInProgress: boolean
  /** Prevents current opening click from auto-closing. */
  showFrameLocked: boolean
  /** Element that had focus before the popper showed. */
  previousFocus: Element | null
  /** Cleanup callbacks for installed focus trap and menu keyboard handlers. */
  focusCleanups: Array<() => void>
}

/**
 * Core props consumed by the popper composable.
 */
export interface PopperProps {
  [key: string]: unknown
  theme: string
  targetNodes: () => Element[]
  referenceNode?: (() => Element | null) | null
  popperNode: () => HTMLElement | null
  shown: boolean
  showGroup?: string | null
  ariaId?: string | null
  disabled: boolean
  positioningDisabled: boolean
  placement: Placement
  delay: number | string | { show?: number | string, hide?: number | string }
  distance: number | string
  skidding: number | string
  triggers: Trigger[]
  showTriggers?: Trigger[] | ((triggers: Trigger[]) => Trigger[])
  hideTriggers?: Trigger[] | ((triggers: Trigger[]) => Trigger[])
  popperTriggers: Trigger[]
  popperShowTriggers?: Trigger[] | ((triggers: Trigger[]) => Trigger[])
  popperHideTriggers?: Trigger[] | ((triggers: Trigger[]) => Trigger[])
  container: string | Element | false
  boundary?: string | Element
  strategy: Strategy
  autoHide: boolean | ((event: Event) => boolean)
  handleResize: boolean
  instantMove: boolean
  eagerMount: boolean
  popperClass?: unknown
  computeTransformOrigin: boolean
  autoMinSize?: boolean
  autoSize: boolean | 'min' | 'max'
  autoMaxSize?: boolean
  autoBoundaryMaxSize: boolean
  preventOverflow: boolean
  overflowPadding: number | string
  arrowPadding: number | string
  arrowOverflow: boolean
  flip: boolean
  shift: boolean
  shiftCrossAxis: boolean
  noAutoFocus: boolean
  ariaRole: string | null
  focusTrap: boolean
  restoreFocus: boolean
  disposeTimeout: number | null
}

/**
 * Values exposed to the default Popper slot.
 */
export interface PopperSlotData {
  popperId: string
  isShown: boolean
  shouldMountContent: boolean
  skipTransition: boolean
  autoHide: boolean
  show: (options?: PopperMethodOptions) => void
  hide: (options?: PopperMethodOptions) => void
  handleResize: boolean
  onResize: () => Promise<void>
  classes: PopperClasses & { popperClass?: unknown }
  result: PopperResult | null
  attrs: Record<string, unknown>
  ariaRole: string | null
}

/**
 * Public methods and state returned by usePopper.
 */
export interface PopperApi {
  popperId: ComputedRef<string>
  slotData: ComputedRef<PopperSlotData>
  parentPopper: PopperApi | null
  state: PopperState
  runtime: PopperRuntime
  props: PopperProps
  emit: (event: string, ...args: unknown[]) => void
  instance: ComponentInternalInstance | null
  show: (options?: PopperMethodOptions) => void
  hide: (options?: PopperMethodOptions) => void
  dispose: () => void
  onResize: () => Promise<void>
  recompute: () => Promise<void>
}

/**
 * Options used to wire usePopper to a component instance.
 */
export interface UsePopperOptions {
  /** Fall back DOM reference when no referenceNode prop exists. */
  rootNode: Ref<Element | null>
  /** Non-prop attrs forwarded to slot data. */
  attrs: Record<string, unknown>
  /** Vue emit function from setup context. */
  emit: (event: string, ...args: unknown[]) => void
}
