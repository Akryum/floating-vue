import type { PropType } from 'vue'
import type { Placement } from '../util/popper'
import type { Trigger } from '../types/trigger'
import type { PopperProps } from '../composable/popper/types'

const ElementType = typeof window !== 'undefined'
  ? window.Element
  : function ElementFallback () {}

/**
 * Trigger event accepted by wrapper components.
 */
export type TriggerEvent = Trigger

/**
 * Public props accepted by wrapper components such as VDropdown and VTooltip.
 */
export const popperWrapperProps = {
  theme: {
    type: String,
    default: null,
  },

  referenceNode: {
    type: Function as PropType<() => Element>,
    default: null,
  },

  shown: {
    type: Boolean,
    default: false,
  },

  showGroup: {
    type: String,
    default: null,
  },

  ariaId: {
    default: null,
  },

  disabled: {
    type: Boolean,
    default: undefined,
  },

  positioningDisabled: {
    type: Boolean,
    default: undefined,
  },

  placement: {
    type: String as PropType<Placement>,
    default: undefined,
  },

  delay: {
    type: [String, Number, Object] as PropType<PopperProps['delay']>,
    default: undefined,
  },

  distance: {
    type: [Number, String],
    default: undefined,
  },

  skidding: {
    type: [Number, String],
    default: undefined,
  },

  triggers: {
    type: Array as PropType<Trigger[]>,
    default: undefined,
  },

  showTriggers: {
    type: [Array, Function] as PropType<Trigger[] | ((triggers: Trigger[]) => Trigger[])>,
    default: undefined,
  },

  hideTriggers: {
    type: [Array, Function] as PropType<Trigger[] | ((triggers: Trigger[]) => Trigger[])>,
    default: undefined,
  },

  popperTriggers: {
    type: Array as PropType<Trigger[]>,
    default: undefined,
  },

  popperShowTriggers: {
    type: [Array, Function] as PropType<Trigger[] | ((triggers: Trigger[]) => Trigger[])>,
    default: undefined,
  },

  popperHideTriggers: {
    type: [Array, Function] as PropType<Trigger[] | ((triggers: Trigger[]) => Trigger[])>,
    default: undefined,
  },

  container: {
    type: [String, Object, ElementType, Boolean],
    default: undefined,
  },

  boundary: {
    type: [String, ElementType],
    default: undefined,
  },

  strategy: {
    type: String as PropType<PopperProps['strategy']>,
    default: undefined,
  },

  autoHide: {
    type: [Boolean, Function] as PropType<boolean | ((event: Event) => boolean)>,
    default: undefined,
  },

  handleResize: {
    type: Boolean,
    default: undefined,
  },

  instantMove: {
    type: Boolean,
    default: undefined,
  },

  eagerMount: {
    type: Boolean,
    default: undefined,
  },

  popperClass: {
    type: [String, Array, Object],
    default: undefined,
  },

  computeTransformOrigin: {
    type: Boolean,
    default: undefined,
  },

  autoMinSize: {
    type: Boolean,
    default: undefined,
  },

  autoSize: {
    type: [Boolean, String] as PropType<PopperProps['autoSize']>,
    default: undefined,
  },

  autoMaxSize: {
    type: Boolean,
    default: undefined,
  },

  autoBoundaryMaxSize: {
    type: Boolean,
    default: undefined,
  },

  preventOverflow: {
    type: Boolean,
    default: undefined,
  },

  overflowPadding: {
    type: [Number, String],
    default: undefined,
  },

  arrowPadding: {
    type: [Number, String],
    default: undefined,
  },

  arrowOverflow: {
    type: Boolean,
    default: undefined,
  },

  flip: {
    type: Boolean,
    default: undefined,
  },

  shift: {
    type: Boolean,
    default: undefined,
  },

  shiftCrossAxis: {
    type: Boolean,
    default: undefined,
  },

  noAutoFocus: {
    type: Boolean,
    default: undefined,
  },

  disposeTimeout: {
    type: Number,
    default: undefined,
  },
}
