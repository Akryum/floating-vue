import { defineComponent, h, ref } from 'vue'
import PopperWrapper from './PopperWrapper.vue'
import { popperWrapperProps } from './popperWrapperProps'
import { usePopperMethods } from '../composable/usePopperMethods'

/**
 * Creates a themed public wrapper component such as VDropdown or VTooltip.
 */
export function createPopperComponent (name: string, theme: string) {
  return defineComponent({
    name,

    props: popperWrapperProps,

    emits: {
      show: () => true,
      hide: () => true,
      'update:shown': (shown: boolean) => typeof shown === 'boolean',
      'apply-show': () => true,
      'apply-hide': () => true,
      'close-group': () => true,
      'close-directive': () => true,
      'auto-hide': () => true,
      resize: () => true,
    },

    setup (props, { attrs, emit, expose, slots }) {
      const popper = ref(null)
      const methods = usePopperMethods(popper)
      expose(methods)

      return () => h(PopperWrapper, {
        ...attrs,
        ...props,
        ref: popper,
        theme: props.theme ?? theme,
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
