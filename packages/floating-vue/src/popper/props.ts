import type { PropType } from 'vue'
import { getDefaultConfig } from '../config'
import type { Placement } from '../util/popper'
import { placements } from '../util/popper'

function defaultPropFactory (prop: string) {
  return function (props: Record<string, unknown>) {
    return getDefaultConfig(props.theme as string, prop)
  }
}

export type TriggerEvent = 'hover' | 'click' | 'focus' | 'touch'

export const popperProps = {
  theme: {
    type: String,
    required: true as const,
  },

  targetNodes: {
    type: Function as PropType<() => Element[]>,
    required: true as const,
  },

  referenceNode: {
    type: Function as PropType<() => Element>,
    default: null,
  },

  popperNode: {
    type: Function as PropType<() => HTMLElement>,
    required: true as const,
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
    default: defaultPropFactory('disabled'),
  },

  positioningDisabled: {
    type: Boolean,
    default: defaultPropFactory('positioningDisabled'),
  },

  placement: {
    type: String as PropType<Placement>,
    default: defaultPropFactory('placement'),
    validator: (value: Placement) => placements.includes(value),
  },

  delay: {
    type: [String, Number, Object] as PropType<string | number | { show?: string | number, hide?: string | number }>,
    default: defaultPropFactory('delay'),
  },

  distance: {
    type: [Number, String],
    default: defaultPropFactory('distance'),
  },

  skidding: {
    type: [Number, String],
    default: defaultPropFactory('skidding'),
  },

  triggers: {
    type: Array as PropType<TriggerEvent[]>,
    default: defaultPropFactory('triggers'),
  },

  showTriggers: {
    type: [Array, Function] as PropType<TriggerEvent[] | ((triggers: TriggerEvent[]) => TriggerEvent[])>,
    default: defaultPropFactory('showTriggers'),
  },

  hideTriggers: {
    type: [Array, Function] as PropType<TriggerEvent[] | ((triggers: TriggerEvent[]) => TriggerEvent[])>,
    default: defaultPropFactory('hideTriggers'),
  },

  popperTriggers: {
    type: Array as PropType<TriggerEvent[]>,
    default: defaultPropFactory('popperTriggers'),
  },

  popperShowTriggers: {
    type: [Array, Function] as PropType<TriggerEvent[] | ((triggers: TriggerEvent[]) => TriggerEvent[])>,
    default: defaultPropFactory('popperShowTriggers'),
  },

  popperHideTriggers: {
    type: [Array, Function] as PropType<TriggerEvent[] | ((triggers: TriggerEvent[]) => TriggerEvent[])>,
    default: defaultPropFactory('popperHideTriggers'),
  },

  container: {
    type: [String, Object, Boolean] as PropType<string | HTMLElement | boolean>,
    default: defaultPropFactory('container'),
  },

  boundary: {
    type: [String, Object] as PropType<string | Element>,
    default: defaultPropFactory('boundary'),
  },

  strategy: {
    type: String as PropType<'absolute' | 'fixed'>,
    validator: (value: string) => ['absolute', 'fixed'].includes(value),
    default: defaultPropFactory('strategy'),
  },

  autoHide: {
    type: [Boolean, Function] as PropType<boolean | ((event: Event) => boolean)>,
    default: defaultPropFactory('autoHide'),
  },

  handleResize: {
    type: Boolean,
    default: defaultPropFactory('handleResize'),
  },

  instantMove: {
    type: Boolean,
    default: defaultPropFactory('instantMove'),
  },

  eagerMount: {
    type: Boolean,
    default: defaultPropFactory('eagerMount'),
  },

  popperClass: {
    type: [String, Array, Object],
    default: defaultPropFactory('popperClass'),
  },

  computeTransformOrigin: {
    type: Boolean,
    default: defaultPropFactory('computeTransformOrigin'),
  },

  /**
   * @deprecated
   */
  autoMinSize: {
    type: Boolean,
    default: defaultPropFactory('autoMinSize'),
  },

  autoSize: {
    type: [Boolean, String] as PropType<boolean | 'min' | 'max'>,
    default: defaultPropFactory('autoSize'),
  },

  /**
   * @deprecated
   */
  autoMaxSize: {
    type: Boolean,
    default: defaultPropFactory('autoMaxSize'),
  },

  autoBoundaryMaxSize: {
    type: Boolean,
    default: defaultPropFactory('autoBoundaryMaxSize'),
  },

  preventOverflow: {
    type: Boolean,
    default: defaultPropFactory('preventOverflow'),
  },

  overflowPadding: {
    type: [Number, String],
    default: defaultPropFactory('overflowPadding'),
  },

  arrowPadding: {
    type: [Number, String],
    default: defaultPropFactory('arrowPadding'),
  },

  arrowOverflow: {
    type: Boolean,
    default: defaultPropFactory('arrowOverflow'),
  },

  flip: {
    type: Boolean,
    default: defaultPropFactory('flip'),
  },

  shift: {
    type: Boolean,
    default: defaultPropFactory('shift'),
  },

  shiftCrossAxis: {
    type: Boolean,
    default: defaultPropFactory('shiftCrossAxis'),
  },

  noAutoFocus: {
    type: Boolean,
    default: defaultPropFactory('noAutoFocus'),
  },

  disposeTimeout: {
    type: Number,
    default: defaultPropFactory('disposeTimeout'),
  },
}

export const popperEmits = {
  show: () => true,
  hide: () => true,
  'update:shown': (_shown: boolean) => true,
  'apply-show': () => true,
  'apply-hide': () => true,
  'close-group': () => true,
  'close-directive': () => true,
  'auto-hide': () => true,
  resize: () => true,
}
