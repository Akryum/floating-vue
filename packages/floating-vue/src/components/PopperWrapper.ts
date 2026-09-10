import { computed, defineComponent, getCurrentInstance, h } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import { PopperRoot } from './internals/PopperRoot'
import { popperEmits, popperProps } from '../popper/props'
import type { PopperExposed, PopperSlotData } from '../popper/usePopper'
import { PopperContent } from './PopperContent'
import { getThemeClasses } from '../config'

export type { TriggerEvent } from '../popper/props'

// `theme` gets its own default below; target/popper nodes are provided by the wrapper itself
type OwnedProp = 'theme' | 'targetNodes' | 'popperNode'
const ownedProps: OwnedProp[] = ['theme', 'targetNodes', 'popperNode']

// Same props as the popper, but without defaults so the theme config applies
// at the popper level, and without validators (they would run on `undefined`).
type InheritedPopperProps = {
  [K in Exclude<keyof typeof popperProps, OwnedProp>]: {
    type: (typeof popperProps)[K] extends { type: infer T } ? T : null
    default: undefined
  }
}

const inheritedPopperProps = Object.fromEntries(
  Object.entries(popperProps)
    .filter(([key]) => !ownedProps.includes(key as OwnedProp))
    .map(([key, prop]) => [key, { type: (prop as { type?: unknown }).type ?? null, default: undefined }]),
) as InheritedPopperProps // Object.fromEntries erases per-key types

const PopperWrapper = /** @__PURE__ */ defineComponent({
  name: 'VPopperWrapper',

  props: {
    theme: {
      type: String,
      default: null,
    },

    ...inheritedPopperProps,
  },

  emits: popperEmits,

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
      }: PopperSlotData) => [
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
