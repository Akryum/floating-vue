import type { PropType } from 'vue'
import { getDefaultConfig } from '../../config'
import { placements, type Placement } from '../../util/popper'
import type { PopperConfig } from '../../types/popper'
import type { Trigger } from '../../types/trigger'
import type { PopperProps } from './types'
import { deprecatedThemeProp, type PresetPropsLike, resolvePresetName } from '../../util/preset'

/**
 * Runtime Element constructor fallback used during SSR.
 */
const ElementType = typeof window !== 'undefined'
  ? window.Element
  : function ElementFallback () {}

/**
 * Creates a Vue prop default that reads from the active preset.
 */
function defaultPropFactory<K extends keyof PopperConfig> (prop: K) {
  return function getDefaultPresetProp (props: PresetPropsLike) {
    return getDefaultConfig(resolvePresetName(props, 'dropdown'), prop)
  }
}

/**
 * Props accepted by the core Popper component.
 */
export const popperProps = {
  preset: {
    type: String,
    // Keep this neutral. `resolvePresetName` is called by consumers whenever
    // they need the active value, so reactive theme changes remain visible.
    default: null,
  },

  /**
   * @deprecated Use `preset` instead.
   */
  theme: deprecatedThemeProp,

  targetNodes: {
    type: Function as PropType<() => Element[]>,
    required: true as const,
  },

  referenceNode: {
    type: Function as PropType<() => Element | null>,
    default: null,
  },

  popperNode: {
    type: Function as PropType<() => HTMLElement | null>,
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
    type: String as PropType<string | null>,
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
    type: Array as PropType<Trigger[]>,
    default: defaultPropFactory('triggers'),
  },

  showTriggers: {
    type: [Array, Function] as PropType<PopperProps['showTriggers']>,
    default: defaultPropFactory('showTriggers'),
  },

  hideTriggers: {
    type: [Array, Function] as PropType<PopperProps['hideTriggers']>,
    default: defaultPropFactory('hideTriggers'),
  },

  popperTriggers: {
    type: Array as PropType<Trigger[]>,
    default: defaultPropFactory('popperTriggers'),
  },

  popperShowTriggers: {
    type: [Array, Function] as PropType<PopperProps['popperShowTriggers']>,
    default: defaultPropFactory('popperShowTriggers'),
  },

  popperHideTriggers: {
    type: [Array, Function] as PropType<PopperProps['popperHideTriggers']>,
    default: defaultPropFactory('popperHideTriggers'),
  },

  container: {
    type: [String, Object, ElementType, Boolean] as PropType<PopperProps['container']>,
    default: defaultPropFactory('container'),
  },

  boundary: {
    type: [String, ElementType] as PropType<PopperProps['boundary']>,
    default: defaultPropFactory('boundary'),
  },

  strategy: {
    type: String as PropType<PopperProps['strategy']>,
    validator: (value: string) => ['absolute', 'fixed'].includes(value),
    default: defaultPropFactory('strategy'),
  },

  autoHide: {
    type: [Boolean, Function] as PropType<PopperProps['autoHide']>,
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
    type: [String, Array, Object] as PropType<PopperProps['popperClass']>,
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

  arrowSize: {
    type: [Number, String] as PropType<PopperProps['arrowSize']>,
    default: defaultPropFactory('arrowSize'),
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

  ariaRole: {
    type: String as PropType<string | null>,
    default: defaultPropFactory('ariaRole'),
  },

  focusTrap: {
    type: Boolean,
    default: defaultPropFactory('focusTrap'),
  },

  restoreFocus: {
    type: Boolean,
    default: defaultPropFactory('restoreFocus'),
  },

  disposeTimeout: {
    type: Number as PropType<number | null>,
    default: defaultPropFactory('disposeTimeout'),
  },
}
