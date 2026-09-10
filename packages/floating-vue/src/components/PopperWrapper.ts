import { defineComponent, h } from 'vue'
import type { PropType } from 'vue'
import PopperRoot from './internals/PopperRoot'
import PopperContent from './PopperContent'
import PopperMethods from '../mixins/PopperMethods'
import ThemeClass from '../mixins/ThemeClass'
import type { Placement } from '../util/popper.js'

export type TriggerEvent = 'hover' | 'click' | 'focus' | 'touch'

let Element: any = function () {}
if (typeof window !== 'undefined') {
  Element = window.Element
}

const PopperWrapper = defineComponent({
  name: 'VPopperWrapper',

  mixins: [
    PopperMethods,
    ThemeClass('finalTheme'),
  ],

  props: {
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
      type: [String, Number, Object] as PropType<string | number | { show: number, hide: number }>,
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
      type: Array as PropType<Array<TriggerEvent>>,
      default: undefined,
    },

    showTriggers: {
      type: [Array, Function] as PropType<Array<TriggerEvent> | ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>)>,
      default: undefined,
    },

    hideTriggers: {
      type: [Array, Function] as PropType<Array<TriggerEvent> | ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>)>,
      default: undefined,
    },

    popperTriggers: {
      type: Array as PropType<Array<TriggerEvent>>,
      default: undefined,
    },

    popperShowTriggers: {
      type: [Array, Function] as PropType<Array<TriggerEvent> | ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>)>,
      default: undefined,
    },

    popperHideTriggers: {
      type: [Array, Function] as PropType<Array<TriggerEvent> | ((triggers: Array<TriggerEvent>) => Array<TriggerEvent>)>,
      default: undefined,
    },

    container: {
      type: [String, Object, Element, Boolean],
      default: undefined,
    },

    boundary: {
      type: [String, Element],
      default: undefined,
    },

    strategy: {
      type: String as PropType<'absolute' | 'fixed'>,
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

    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: undefined,
    },

    autoSize: {
      type: [Boolean, String] as PropType<boolean | 'min' | 'max'>,
      default: undefined,
    },

    /**
     * @deprecated
     */
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
  },

  emits: {
    show: () => true,
    hide: () => true,
    'update:shown': (_shown: boolean) => true,
    'apply-show': () => true,
    'apply-hide': () => true,
    'close-group': () => true,
    'close-directive': () => true,
    'auto-hide': () => true,
    resize: () => true,
  },

  computed: {
    finalTheme (): string {
      return this.theme ?? this.$options.vPopperTheme
    },
  },

  methods: {
    getTargetNodes () {
      return Array.from(this.$el.children)
        .filter(node => node !== this.$refs.popperContent.$el)
    },
  },

  render () {
    return h(PopperRoot, {
      ref: 'popper',
      ...this.$props,
      theme: this.finalTheme,
      targetNodes: this.getTargetNodes,
      popperNode: () => (this.$refs as any).popperContent.$el,
      class: [
        this.themeClass,
      ],
      onShow: () => this.$emit('show'),
      onHide: () => this.$emit('hide'),
      'onUpdate:shown': (shown: boolean) => this.$emit('update:shown', shown),
      onApplyShow: () => this.$emit('apply-show'),
      onApplyHide: () => this.$emit('apply-hide'),
      onCloseGroup: () => this.$emit('close-group'),
      onCloseDirective: () => this.$emit('close-directive'),
      onAutoHide: () => this.$emit('auto-hide'),
      onResize: () => this.$emit('resize'),
    }, {
      default: ({
        popperId,
        isShown,
        shouldMountContent,
        skipTransition,
        autoHide,
        show,
        hide,
        handleResize,
        onResize,
        classes,
        result,
      }) => [
        this.$slots.default?.({
          shown: isShown,
          show,
          hide,
        }),
        h(PopperContent, {
          ref: 'popperContent',
          popperId,
          theme: this.finalTheme,
          shown: isShown,
          mounted: shouldMountContent,
          skipTransition,
          autoHide,
          handleResize,
          classes,
          result,
          onHide: hide,
          onResize,
        }, {
          default: () => this.$slots.popper?.({
            shown: isShown,
            hide,
          }),
        }),
      ],
    })
  },
})

export default PopperWrapper
