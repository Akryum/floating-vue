import type { PropType } from 'vue'
import { getDefaultConfig } from '../../config'
import { placements, type Placement } from '../../util/popper'
import type { PopperProps } from './types'

/**
 * Runtime Element constructor fallback used during SSR.
 */
const ElementType = typeof window !== 'undefined'
  ? window.Element
  : function ElementFallback () {}

/**
 * Creates a Vue prop default that reads from the active theme preset.
 */
function defaultPropFactory (prop: string) {
  return function getDefaultThemeProp (props: PopperProps) {
    return getDefaultConfig(props.theme, prop)
  }
}

/**
 * Props accepted by the core Popper component.
 */
export const popperProps = {
  theme: {
    type: String,
    required: true,
  },

  targetNodes: {
    type: Function as PropType<() => Element[]>,
    required: true,
  },

  referenceNode: {
    type: Function as PropType<() => Element | null>,
    default: null,
  },

  popperNode: {
    type: Function as PropType<() => HTMLElement | null>,
    required: true,
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
    type: [String, Number, Object] as PropType<PopperProps['delay']>,
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
    type: Array,
    default: defaultPropFactory('triggers'),
  },

  showTriggers: {
    type: [Array, Function],
    default: defaultPropFactory('showTriggers'),
  },

  hideTriggers: {
    type: [Array, Function],
    default: defaultPropFactory('hideTriggers'),
  },

  popperTriggers: {
    type: Array,
    default: defaultPropFactory('popperTriggers'),
  },

  popperShowTriggers: {
    type: [Array, Function],
    default: defaultPropFactory('popperShowTriggers'),
  },

  popperHideTriggers: {
    type: [Array, Function],
    default: defaultPropFactory('popperHideTriggers'),
  },

  container: {
    type: [String, Object, ElementType, Boolean],
    default: defaultPropFactory('container'),
  },

  boundary: {
    type: [String, ElementType],
    default: defaultPropFactory('boundary'),
  },

  strategy: {
    type: String as PropType<PopperProps['strategy']>,
    validator: (value: string) => ['absolute', 'fixed'].includes(value),
    default: defaultPropFactory('strategy'),
  },

  autoHide: {
    type: [Boolean, Function],
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

  autoMinSize: {
    type: Boolean,
    default: defaultPropFactory('autoMinSize'),
  },

  autoSize: {
    type: [Boolean, String] as PropType<PopperProps['autoSize']>,
    default: defaultPropFactory('autoSize'),
  },

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
