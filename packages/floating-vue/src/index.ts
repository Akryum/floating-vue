import { assign } from './util/assign-deep'
import type { FloatingVueConfig } from './config'
import { config } from './config'
import './style.css'
// Components
import { Dropdown } from './components/Dropdown'
import { Menu } from './components/Menu'
import { Tooltip } from './components/Tooltip'
// Directives
import { vTooltip } from './directives/v-tooltip'
import { vClosePopper } from './directives/v-close-popper'

/* Exports */

export const options = config
// Directives
export { vTooltip, vClosePopper } // For <script setup>
/**
 * @deprecated Import `vTooltip` instead.
 */
export const VTooltip = vTooltip
/**
 * @deprecated Import `vClosePopper` instead.
 */
export const VClosePopper = vClosePopper
export { createTooltip, destroyTooltip } from './directives/v-tooltip'
// Components
export { Dropdown, Menu, Tooltip }
export { createPopper as Popper } from './factories/Popper'
export { PopperContent } from './components/PopperContent'
export { PopperMethods } from './mixins/PopperMethods'
export { PopperWrapper } from './components/PopperWrapper'
export { ThemeClass } from './mixins/ThemeClass'
export { TooltipDirective } from './components/TooltipDirective'
// Utils
export { hideAllPoppers, recomputeAllPoppers } from './factories/Popper'
export * from './util/events'
export { placements } from './util/popper'
export type { Placement } from './util/popper'
// Types
export type { TriggerEvent } from './components/PopperWrapper'

/* Vue plugin */

export function install (app, options: FloatingVueConfig = {}) {
  if (app.$_vTooltipInstalled) { return }
  app.$_vTooltipInstalled = true

  assign(config, options)

  // Directives
  app.directive('tooltip', vTooltip)
  app.directive('close-popper', vClosePopper)
  // Components
  for (const component of [Tooltip, Dropdown, Menu]) {
    app.component(component.name, component)
  }
}

const plugin = {

  version: VERSION,
  install,
  options: config,
}

export default plugin
