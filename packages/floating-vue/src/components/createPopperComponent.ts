import { defineComponent, h, ref } from 'vue'
import PopperWrapper from './PopperWrapper.vue'
import { popperWrapperProps } from './popperWrapperProps'
import { popperEmits } from '../composable/popper/emits'
import { usePopperMethods } from '../composable/usePopperMethods'

/**
 * Creates a public wrapper component bound to one preset, such as VDropdown or VTooltip.
 */
export function createPopperComponent (name: string, preset: string) {
  return defineComponent({
    name,

    props: popperWrapperProps,

    emits: popperEmits,

    setup (props, { attrs, emit, expose, slots }) {
      const popper = ref(null)
      const methods = usePopperMethods(popper)
      expose(methods)

      return () => h(PopperWrapper, {
        ...attrs,
        ...props,
        ref: popper,
        preset: props.preset ?? props.theme ?? preset,
        onShow: () => emit('show'),
        onHide: () => emit('hide'),
        'onUpdate:shown': (shown: boolean) => emit('update:shown', shown),
        onApplyShow: () => emit('apply-show'),
        onApplyHide: () => emit('apply-hide'),
        onCloseGroup: () => emit('close-group'),
        onCloseDirective: () => emit('close-directive'),
        onAutoHide: () => emit('auto-hide'),
        onResize: () => emit('resize'),
      }, slots)
    },
  })
}
