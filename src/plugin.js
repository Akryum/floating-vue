import vtooltip from './v-tooltip'

export default {
  install (Vue) {
    Vue.directive('tooltip', vtooltip)
  },
}

export const VTooltip = vtooltip
