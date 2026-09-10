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

type CustomTriggers = TriggerEvent[] | ((triggers: TriggerEvent[]) => TriggerEvent[])

// Props whose default comes from the theme config (default: getDefaultConfig(theme, name))
const themedPropTypes = {
  disabled: Boolean,
  positioningDisabled: Boolean,
  delay: [String, Number, Object] as PropType<string | number | { show?: string | number, hide?: string | number }>,
  distance: [Number, String],
  skidding: [Number, String],
  triggers: Array as PropType<TriggerEvent[]>,
  showTriggers: [Array, Function] as PropType<CustomTriggers>,
  hideTriggers: [Array, Function] as PropType<CustomTriggers>,
  popperTriggers: Array as PropType<TriggerEvent[]>,
  popperShowTriggers: [Array, Function] as PropType<CustomTriggers>,
  popperHideTriggers: [Array, Function] as PropType<CustomTriggers>,
  container: [String, Object, Boolean] as PropType<string | HTMLElement | boolean>,
  boundary: [String, Object] as PropType<string | Element>,
  autoHide: [Boolean, Function] as PropType<boolean | ((event: Event) => boolean)>,
  handleResize: Boolean,
  instantMove: Boolean,
  eagerMount: Boolean,
  popperClass: [String, Array, Object],
  computeTransformOrigin: Boolean,
  autoSize: [Boolean, String] as PropType<boolean | 'min' | 'max'>,
  autoBoundaryMaxSize: Boolean,
  preventOverflow: Boolean,
  overflowPadding: [Number, String],
  arrowPadding: [Number, String],
  arrowOverflow: Boolean,
  flip: Boolean,
  shift: Boolean,
  shiftCrossAxis: Boolean,
  noAutoFocus: Boolean,
  disposeTimeout: Number,
}

type ThemedProps = {
  [K in keyof typeof themedPropTypes]: {
    type: (typeof themedPropTypes)[K]
    default: ReturnType<typeof defaultPropFactory>
  }
}

const themedProps = Object.fromEntries(
  Object.entries(themedPropTypes)
    .map(([key, type]) => [key, { type, default: defaultPropFactory(key) }]),
) as ThemedProps // Object.fromEntries erases per-key types

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

  placement: {
    type: String as PropType<Placement>,
    default: defaultPropFactory('placement'),
    validator: (value: Placement) => placements.includes(value),
  },

  strategy: {
    type: String as PropType<'absolute' | 'fixed'>,
    validator: (value: string) => ['absolute', 'fixed'].includes(value),
    default: defaultPropFactory('strategy'),
  },

  /**
   * @deprecated Use `autoSize="min"` instead.
   */
  autoMinSize: {
    type: Boolean,
    default: defaultPropFactory('autoMinSize'),
  },

  /**
   * @deprecated Use `autoBoundaryMaxSize` instead.
   */
  autoMaxSize: {
    type: Boolean,
    default: defaultPropFactory('autoMaxSize'),
  },

  ...themedProps,
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
