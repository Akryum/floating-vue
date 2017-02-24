import vtooltip, { defaultOptions } from './v-tooltip'

export function install (Vue, options) {
  if (install.installed) return
  install.installed = true

  options = Object.assign({}, defaultOptions, options || {})
  vtooltip.options = options
  Vue.directive('tooltip', vtooltip)
}

export const VTooltip = vtooltip

const plugin = {
  install,
}

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default plugin
