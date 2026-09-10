import { defineComponent } from 'vue'
import { popperEmits, popperProps } from '../popper/props'
import { usePopper } from '../popper/usePopper'

export const createPopper = () => defineComponent({
  name: 'VPopper',

  props: popperProps,

  emits: popperEmits,

  setup (props, { emit, slots, expose }) {
    const { show, hide, dispose, onResize, slotData } = usePopper(props, emit)

    expose({
      show,
      hide,
      dispose,
      onResize,
    })

    return () => slots.default?.(slotData.value)
  },
})
