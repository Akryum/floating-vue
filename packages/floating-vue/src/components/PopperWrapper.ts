import { computed, defineComponent, getCurrentInstance, h } from 'vue'
import type { ComponentPublicInstance, PropType } from 'vue'
import { PopperRoot } from './internals/PopperRoot'
import type { PopperExposed } from '../popper/usePopper'
import { PopperContent } from './PopperContent'
import { getThemeClasses } from '../config'
import type { Placement } from '../util/popper.js'

export type TriggerEvent = 'hover' | 'click' | 'focus' | 'touch'

const PopperWrapper = /** @__PURE__ */ defineComponent({
  name: 'VPopperWrapper',

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
      type: [String, Object, Boolean] as PropType<string | HTMLElement | boolean>,
      default: undefined,
    },

    boundary: {
      type: [String, Object] as PropType<string | Element>,
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

  setup (props, { emit, slots, expose }) {
    const instance = getCurrentInstance()!
    const vPopperTheme = (instance.type as any).vPopperTheme

    const finalTheme = computed(() => props.theme ?? vPopperTheme)
    const themeClass = computed(() => getThemeClasses(finalTheme.value))

    let popperRef: (ComponentPublicInstance & PopperExposed) | undefined
    let popperContentRef: InstanceType<typeof PopperContent> | undefined

    function getTargetNodes (): Element[] {
      return Array.from((popperRef!.$el as HTMLElement).children)
        .filter(node => node !== popperContentRef!.$el)
    }

    expose({
      show: (...args: any[]) => popperRef!.show(...args),
      hide: (...args: any[]) => popperRef!.hide(...args),
      dispose: () => popperRef!.dispose(),
      onResize: () => popperRef!.onResize(),
    })

    return () => h(PopperRoot, {
      ref: (el: any) => { popperRef = el },
      ...props,
      theme: finalTheme.value,
      targetNodes: getTargetNodes,
      popperNode: () => popperContentRef!.$el,
      class: [
        themeClass.value,
      ],
      onShow: () => emit('show'),
      onHide: () => emit('hide'),
      'onUpdate:shown': (shown: boolean) => emit('update:shown', shown),
      onApplyShow: () => emit('apply-show'),
      onApplyHide: () => emit('apply-hide'),
      onCloseGroup: () => emit('close-group'),
      onCloseDirective: () => emit('close-directive'),
      onAutoHide: () => emit('auto-hide'),
      onResize: () => emit('resize'),
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
        slots.default?.({
          shown: isShown,
          show,
          hide,
        }),
        h(PopperContent, {
          ref: (el: any) => { popperContentRef = el },
          popperId,
          theme: finalTheme.value,
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
          default: () => slots.popper?.({
            shown: isShown,
            hide,
          }),
        }),
      ],
    })
  },
})

export { PopperWrapper }
