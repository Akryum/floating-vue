import type { App } from 'vue'
import { assign } from './util/assign-deep'
import { config, FloatingVueConfig } from './config'
import './style.css'
// Components
import PrivateDropdown from './components/Dropdown'
import PrivateMenu from './components/Menu'
import PrivatePopper from './components/Popper'
import PrivatePopperContent from './components/PopperContent.vue'
import PrivatePopperWrapper from './components/PopperWrapper.vue'
import PrivateTooltip from './components/Tooltip'
import PrivateTooltipDirective from './components/TooltipDirective.vue'
// Deprecated Options API mixins
import PrivatePopperMethods from './components/PopperMethods'
import PrivateThemeClass from './components/ThemeClass'
// Directives
import PrivateVTooltip from './directives/v-tooltip'
import PrivateVClosePopper from './directives/v-close-popper'

/* Exports */

export const options = config
// Directive
/**
 * @deprecated Import `vTooltip` instead.
 */
export const VTooltip = PrivateVTooltip
export const vTooltip = PrivateVTooltip // For <script setup>
export { createTooltip, destroyTooltip } from './directives/v-tooltip'
/**
 * @deprecated Import `vClosePopper` instead.
 */
export const VClosePopper = PrivateVClosePopper
export const vClosePopper = PrivateVClosePopper // For <script setup>
// Components
export const Dropdown = PrivateDropdown
export const Menu = PrivateMenu
export const Popper = PrivatePopper
export const PopperContent = PrivatePopperContent
export const PopperWrapper = PrivatePopperWrapper
export const Tooltip = PrivateTooltip
export const TooltipDirective = PrivateTooltipDirective
/**
 * @deprecated Use the `usePopperMethods` composable instead.
 */
export const PopperMethods = PrivatePopperMethods
/**
 * @deprecated Use the `usePresetClass` composable instead.
 */
export const ThemeClass = PrivateThemeClass
export { usePopper } from './composable/usePopper'
export { usePopperMethods } from './composable/usePopperMethods'
export { usePresetClass } from './composable/usePresetClass'
export { defineFloatingVueConfig, definePopperPreset } from './config'
// Utils
export { hideAllPoppers, recomputeAllPoppers } from './components/Popper'
export * from './util/events'
export { placements } from './util/popper'
export type { Placement } from './util/popper'
// Types
export type { TriggerEvent } from './components/popperWrapperProps'
export type { PopperApi, PopperProps, PopperSlotData } from './composable/usePopper'
export type { FloatingVueConfig } from './config'
export type { Config, PopperPreset } from './types/config'
export type { PopperConfig } from './types/popper'

/* Vue plugin */

export function install (app: App & { $_vTooltipInstalled?: boolean }, options: FloatingVueConfig = {}) {
  if (app.$_vTooltipInstalled) return
  app.$_vTooltipInstalled = true

  if (options.themes) {
    console.warn('[floating-vue] `themes` option is deprecated. Use `presets` instead.')
  }

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
