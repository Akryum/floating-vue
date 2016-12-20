import vtooltip from './v-tooltip'

export function install (Vue) {
  Vue.directive('tooltip', vtooltip)
}

export const VTooltip = vtooltip

export default {
  install,
}
