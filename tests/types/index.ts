import Vue from 'vue'
import VTooltip from '../..'

Vue.use(VTooltip)
Vue.use(VTooltip, {
  disposeTimeout: 4000,
  popover: {
    defaultAutoHide: false,
  },
})

VTooltip.enabled = true

VTooltip.options.defaultClass = '.tooltip'
VTooltip.options.popover.defaultPlacement = 'top'
