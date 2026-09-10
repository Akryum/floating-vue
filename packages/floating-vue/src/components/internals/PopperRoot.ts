import { defineComponent, h } from 'vue'
import { popperEmits, popperProps } from '../../popper/props'
import { usePopper } from '../../popper/usePopper'

export const PopperRoot = defineComponent({
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

    return () => h('div', {
      ref: 'reference',
      class: ['v-popper', {
        'v-popper--shown': slotData.value.isShown,
      }],
    }, slots.default?.(slotData.value))
  },
})
