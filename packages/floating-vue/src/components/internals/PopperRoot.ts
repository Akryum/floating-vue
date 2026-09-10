import { defineComponent, h } from 'vue'
import { createPopper } from '../../factories/Popper'

export const PopperRoot = defineComponent({
  extends: createPopper(),

  render () {
    return h('div', {
      ref: 'reference',
      class: ['v-popper', {
        'v-popper--shown': this.slotData.isShown,
      }],
    }, this.$slots.default?.(this.slotData))
  },
})
