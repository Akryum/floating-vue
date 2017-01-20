import vtooltip, { defaultOptions } from './v-tooltip'

export function install (Vue, options) {
  options = Object.assign({}, defaultOptions, options || {})
  vtooltip.options = options
  Vue.directive('tooltip', vtooltip)
}

export const VTooltip = vtooltip

export default {
  install,
}
