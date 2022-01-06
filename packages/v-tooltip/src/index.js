import { assign } from './util/assign-deep'
import { config } from './config'
import 'vue-resize/dist/vue-resize.css'
// Components
import PrivateDropdown from './components/Dropdown.vue'
import PrivateMenu from './components/Menu.vue'
import PrivatePopper from './components/Popper'
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
export const Menu = PrivateMenu
export const Popper = PrivatePopper
export const PopperContent = PrivatePopperContent
export const PopperMethods = PrivatePopperMethods
export const PopperWrapper = PrivatePopperWrapper
export const ThemeClass = PrivateThemeClass
export const Tooltip = PrivateTooltip
export const TooltipDirective = PrivateTooltipDirective
// Utils
export { hideAllPoppers } from './components/Popper'

/* Vue plugin */

export function install (app, options = {}) {
  if (app.$_vTooltipInstalled) return
  app.$_vTooltipInstalled = true

  assign(config, options)

  // Directive
  app.directive('tooltip', PrivateVTooltip)
  app.directive('close-popper', PrivateVClosePopper)
  // Components
  // eslint-disable-next-line vue/component-definition-name-casing
  app.component('v-tooltip', PrivateTooltip)
  app.component('VTooltip', PrivateTooltip)
  // eslint-disable-next-line vue/component-definition-name-casing
  app.component('v-dropdown', PrivateDropdown)
  app.component('VDropdown', PrivateDropdown)
  // eslint-disable-next-line vue/component-definition-name-casing
  app.component('v-menu', PrivateMenu)
  app.component('VMenu', PrivateMenu)
}

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install,
  options: config,
}

export default plugin
