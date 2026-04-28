import { defineComponent, ref } from 'vue'
import { popperProps } from '../composable/popper/props'
import { usePopper } from '../composable/usePopper'
import type { PopperProps } from '../composable/popper/types'

/**
 * Core renderless popper component.
 */
export default defineComponent({
  name: 'VPopper',

  props: popperProps,

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
    const rootNode = ref<Element | null>(null)
    const api = usePopper(props as PopperProps, {
      rootNode,
      attrs,
      emit: emit as (event: string, ...args: unknown[]) => void,
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
