import { defineComponent, h } from 'vue'
import Popper from '../Popper'

export default defineComponent({
  extends: Popper(),

  render () {
    return h('div', {
      ref: 'reference',
      class: ['v-popper', {
        'v-popper--shown': this.slotData.isShown,
      }],
    }, this.$slots.default?.(this.slotData))
  },
})
