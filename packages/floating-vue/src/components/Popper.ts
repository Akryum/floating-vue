import { defineComponent, ref } from 'vue'
import { popperEmits } from '../composable/popper/emits'
import { popperProps } from '../composable/popper/props'
import { usePopper } from '../composable/usePopper'
import type { PopperApi } from '../composable/popper/types'
import type { ComponentWithExposedMethods } from './componentTypes'

/**
 * Imperative methods exposed by the core renderless Popper component.
 */
type CorePopperExposedMethods = Pick<PopperApi, 'show' | 'hide' | 'dispose' | 'onResize' | 'recompute'>

/**
 * Core renderless popper component.
 */
const component = defineComponent({
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

export default component as typeof component & ComponentWithExposedMethods<typeof component, CorePopperExposedMethods>

export { hideAllPoppers, recomputeAllPoppers } from '../composable/popper/registry'
export type { PopperApi as PopperInstance } from '../composable/usePopper'
