import { defineComponent, ref } from 'vue'
import { popperEmits } from '../composable/popper/emits'
import { popperProps } from '../composable/popper/props'
import { usePopper } from '../composable/usePopper'

/**
 * Core renderless popper component.
 */
export default defineComponent({
  name: 'VPopper',

  props: popperProps,

  emits: popperEmits,

  setup (props, { attrs, emit, expose, slots }) {
    const rootNode = ref<Element | null>(null)
    const api = usePopper(props, {
      rootNode,
      attrs,
      emit,
    })

    expose({
      show: api.show,
      hide: api.hide,
      dispose: api.dispose,
      onResize: api.onResize,
      recompute: api.recompute,
    })

    return () => slots.default?.(api.slotData.value)
  },
})

export { hideAllPoppers, recomputeAllPoppers } from '../composable/popper/registry'
export type { PopperApi as PopperInstance } from '../composable/usePopper'
