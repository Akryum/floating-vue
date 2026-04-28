// Type-regression fixture. Compiled by `vue-tsc --noEmit` to catch
// breaking changes in the public type surface. Not executed at runtime.

import {
  Dropdown,
  Menu,
  Popper,
  PopperContent,
  PopperWrapper,
  Tooltip,
  TooltipDirective,
  VClosePopper,
  VTooltip,
  createTooltip,
  destroyTooltip,
  hideAllPoppers,
  install,
  options,
  placements,
  recomputeAllPoppers,
  usePopper,
  usePopperMethods,
  useThemeClass,
  vClosePopper,
  vTooltip,
  type Placement,
  type PopperApi,
  type PopperProps,
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
expectType<typeof useThemeClass>(useThemeClass)

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
