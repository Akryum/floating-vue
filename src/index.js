import { assign } from './util/assign-deep'
import { config } from './config'
import 'vue-resize/dist/vue-resize.css'
// Components
import PrivateDropdown from './components/Dropdown.vue'
import PrivatePopper from './components/Popper.vue'
import PrivatePopperContent from './components/PopperContent.vue'
import PrivatePopperMethods from './components/PopperMethods'
import PrivatePopperWrapper from './components/PopperWrapper.vue'
import PrivateThemeClass from './components/ThemeClass'
import PrivateTooltip from './components/Tooltip.vue'
import PrivateTooltipDirective from './components/TooltipDirective.vue'
// Directives
import PrivateVTooltip from './directives/v-tooltip'
import PrivateVClosePopper from './directives/v-close-popper'

/* Exports */

export const options = config
// Directive
export const VTooltip = PrivateVTooltip
export { createTooltip, destroyTooltip } from './directives/v-tooltip'
export const VClosePopper = PrivateVClosePopper
// Components
export const Dropdown = PrivateDropdown
export const Popper = PrivatePopper
export const PopperContent = PrivatePopperContent
export const PopperMethods = PrivatePopperMethods
export const PopperWrapper = PrivatePopperWrapper
export const ThemeClass = PrivateThemeClass
export const Tooltip = PrivateTooltip
export const TooltipDirective = PrivateTooltipDirective

/* Vue plugin */

export function install (Vue, options = {}) {
  if (install.installed) return
  install.installed = true

  assign(config, options)

  // Directive
  Vue.directive('tooltip', PrivateVTooltip)
  Vue.directive('close-popper', PrivateVClosePopper)
  // Components
  Vue.component('v-dropdown', PrivateDropdown)
  Vue.component('VDropdown', PrivateDropdown)
  Vue.component('v-tooltip', PrivateTooltip)
  Vue.component('VTooltip', PrivateTooltip)
}

const plugin = {
  install,
  options: config,
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
