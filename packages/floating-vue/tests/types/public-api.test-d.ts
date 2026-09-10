// Type-regression fixture. Compiled by `vue-tsc --noEmit` to catch
// breaking changes in the public type surface. Not executed at runtime.

import {
  Dropdown,
  Menu,
  Popper,
  PopperContent,
  PopperMethods,
  PopperWrapper,
  ThemeClass,
  Tooltip,
  TooltipDirective,
  VClosePopper,
  VTooltip,
  createTooltip,
  defineFloatingVueConfig,
  definePopperPreset,
  destroyTooltip,
  hideAllPoppers,
  install,
  options,
  placements,
  recomputeAllPoppers,
  usePopper,
  usePopperMethods,
  usePresetClass,
  vClosePopper,
  vTooltip,
  type Placement,
  type PopperApi,
  type PopperConfig,
  type PopperProps,
  type PopperPreset,
  type PopperSlotData,
  type TriggerEvent,
} from '../../src'
import type { App } from 'vue'

/**
 * Compile-time identity helper used to assert variable types without runtime cost.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function expectType<T> (_value: T): void {}

// Public component constructors are exported.
expectType<unknown>(Dropdown)
expectType<unknown>(Menu)
expectType<unknown>(Popper)
expectType<unknown>(PopperContent)
expectType<unknown>(PopperWrapper)
expectType<unknown>(Tooltip)
expectType<unknown>(TooltipDirective)

// Deprecated Options API mixins kept for floating-vue 5 consumers.
expectType<unknown>(PopperMethods)
expectType<(prop?: string) => unknown>(ThemeClass)

// Directives are exported under both legacy and Vue 3 names.
expectType<typeof vTooltip>(VTooltip)
expectType<typeof vClosePopper>(VClosePopper)

// Tooltip directive helpers expose imperative show/hide handles.
expectType<(el: HTMLElement, value: string, modifiers: Record<string, boolean> | undefined) => unknown>(createTooltip)
expectType<(el: HTMLElement) => void>(destroyTooltip)

// Registry helpers operate on the global popper set.
expectType<() => void>(hideAllPoppers)
expectType<() => void | Promise<void>>(recomputeAllPoppers)

// Plugin install signature accepts a Vue App and optional config.
expectType<(app: App, options?: Record<string, unknown>) => void>(install as never)

// Composables expose their public shape.
expectType<typeof usePopper>(usePopper)
expectType<typeof usePopperMethods>(usePopperMethods)
expectType<typeof usePresetClass>(usePresetClass)

// Placement type literally includes both floating-ui placements and the auto family.
const placementLiteralOk: Placement = 'top'
const placementAutoOk: Placement = 'auto'
const placementAutoEndOk: Placement = 'auto-end'
expectType<Placement>(placementLiteralOk)
expectType<Placement>(placementAutoOk)
expectType<Placement>(placementAutoEndOk)
expectType<Placement[]>(placements)

// PopperApi exposes the documented surface — fail at compile time if any of these vanish.
declare const api: PopperApi
expectType<() => void>(api.dispose)
expectType<() => Promise<void>>(api.onResize)
expectType<() => Promise<void>>(api.recompute)
expectType<PopperProps>(api.props)

// Slot data shape consumers depend on.
declare const slot: PopperSlotData
expectType<boolean>(slot.isShown)
expectType<boolean>(slot.shouldMountContent)

// Trigger event union covers the documented values.
const trigger: TriggerEvent = 'hover'
expectType<TriggerEvent>(trigger)

// `options` mirrors the runtime config object.
expectType<typeof options>(options)
expectType<unknown>(options.popperClass)
expectType<boolean | undefined>(options.autoMinSize)
expectType<boolean | undefined>(options.autoMaxSize)

// Config helpers are runtime-neutral identity helpers with precise return types.
const customPreset = definePopperPreset({
  $extend: 'dropdown',
  arrowSize: 14,
  popperClass: ['custom-popper', { active: true }],
  autoHide: (event: Event) => event.type === 'click',
})
expectType<PopperPreset>(customPreset)

const customConfig = defineFloatingVueConfig({
  distance: '8',
  presets: {
    custom: customPreset,
    compact: definePopperPreset({
      $extend: 'tooltip',
      placement: 'bottom-start',
    }),
  },
})
expectType<typeof customConfig>(customConfig)

// The deprecated `themes` config key still type-checks.
const legacyConfig = defineFloatingVueConfig({
  themes: { custom: customPreset },
})
expectType<typeof legacyConfig>(legacyConfig)

// @ts-expect-error Unknown config keys should fail excess-property checks.
defineFloatingVueConfig({ unknownOption: true })

// @ts-expect-error Unknown preset keys should fail excess-property checks.
definePopperPreset({ unknownPresetOption: true })

// Component props expose the public wrapper option surface.
type DropdownProps = InstanceType<typeof Dropdown>['$props']
const dropdownProps: DropdownProps = {
  preset: 'custom',
  arrowSize: '1rem',
  popperClass: ['one-off', { bounded: true }],
  autoHide: (event: Event) => event.type === 'pointerdown',
  container: false,
}
expectType<DropdownProps>(dropdownProps)

// The deprecated `theme` alias still type-checks on wrapper components.
const legacyDropdownProps: DropdownProps = { theme: 'custom' }
expectType<DropdownProps>(legacyDropdownProps)

// Public component refs expose the imperative popper methods.
declare const dropdown: InstanceType<typeof Dropdown>
declare const menu: InstanceType<typeof Menu>
declare const tooltip: InstanceType<typeof Tooltip>
declare const popper: InstanceType<typeof Popper>

for (const instance of [dropdown, menu, tooltip, popper]) {
  expectType<void>(instance.show())
  expectType<void>(instance.hide())
  expectType<void>(instance.dispose())
  expectType<Promise<void>>(instance.onResize())
}

// Core Popper retains its positioning recomputation method.
expectType<Promise<void>>(popper.recompute())

// @ts-expect-error Public popper instances do not expose arbitrary methods.
dropdown.unknownMethod()

// Wrapper aria IDs are safe to pass through to the core popper.
const dropdownAriaId: DropdownProps = { ariaId: 'dropdown-id' }
const dropdownNullAriaId: DropdownProps = { ariaId: null }
expectType<DropdownProps>(dropdownAriaId)
expectType<DropdownProps>(dropdownNullAriaId)

// @ts-expect-error ariaId accepts only string or null.
expectType<DropdownProps>({ ariaId: 1 })

const presetConfigValues: Partial<PopperConfig> = {
  arrowSize: '0.75rem',
  popperClass: 'preset-popper',
  autoHide: () => true,
}
expectType<Partial<PopperConfig>>(presetConfigValues)
