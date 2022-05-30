import { assign } from './util/assign-deep'
import { config, FloatingVueConfig } from './config'
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
export * from './util/events'
export { placements } from './util/popper'
export type { Placement } from './util/popper'

/* Vue plugin */

export function install (app, options: FloatingVueConfig = {}) {
  if (app.$_vTooltipInstalled) return
  app.$_vTooltipInstalled = true

  assign(config, options)

  // Directive
  app.directive('tooltip', PrivateVTooltip)
  app.directive('close-popper', PrivateVClosePopper)
  // Components
  app.component('VTooltip', PrivateTooltip)
  app.component('VDropdown', PrivateDropdown)
  app.component('VMenu', PrivateMenu)
}

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install,
  options: config,
}

export default plugin
