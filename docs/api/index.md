---
outline: deep
---

# API Reference

## Global

### `hideAllPoppers`

Hides all shown poppers.

```js
import { hideAllPoppers } from 'floating-vue'

hideAllPoppers()
```

### `recomputeAllPoppers`

Recompute the position of all shown poppers.

```js
import { recomputeAllPoppers } from 'floating-vue'

recomputeAllPoppers()
```

This function is automatically called when the window is resized.

### `defineFloatingVueConfig`

Typed identity helper for global configuration objects. It returns the same object and only exists to provide TypeScript autocomplete and excess-property checks.

```ts
import FloatingVue, { defineFloatingVueConfig, definePopperPreset } from 'floating-vue'

app.use(FloatingVue, defineFloatingVueConfig({
  presets: {
    custom: definePopperPreset({
      $extend: 'dropdown',
      arrowSize: 14,
    }),
  },
}))
```

### `definePopperPreset`

Typed identity helper for one preset object. Use it when sharing presets across config files or when you want excess-property checks on a single preset.

### `createTooltip`

`createTooltip(el, valueOrOptions, directiveModifiers)` creates a tooltip on a given element.

```js
import { createTooltip, destroyTooltip } from 'floating-vue'

export function clipboardSuccess (el) {
  const tooltip = createTooltip(el, {
    triggers: [],
    content: 'Text copied!',
  }, {})
  tooltip.show()
  setTimeout(() => {
    tooltip.hide()
    // Transition
    setTimeout(() => {
      destroyTooltip(el)
    }, 400)
  }, 600)
}
```

### `destroyTooltip`

`destroyTooltip(el)` destroys a tooltip on a given element.

See example above.

### `placements`

Array of every valid value for the [`placement`](#placement) prop. Useful to build a placement picker.

```js
import { placements } from 'floating-vue'
```

### `SHOW_EVENT_MAP` and `HIDE_EVENT_MAP`

Maps each [trigger](#triggers) to the DOM event floating-vue listens to.

| Trigger | `SHOW_EVENT_MAP` | `HIDE_EVENT_MAP` |
| --- | --- | --- |
| `hover` | `mouseenter` | `mouseleave` |
| `focus` | `focus` | `blur` |
| `click` | `click` | `click` |
| `touch` | `touchstart` | `touchend` |
| `pointer` | `pointerdown` | `pointerup` |

## Composables

### `usePopper`

`usePopper(props: PopperProps, options: UsePopperOptions): PopperApi`

The entire logic of the `<Popper>` component. Use it only if you are replacing `<Popper>` itself — for a custom popper built on top of `<Popper>`, use [`usePopperMethods`](#usepoppermethods) instead. See the [custom popper component](../guide/custom-component.md) guide.

`options` requires:

- `rootNode`: `Ref<Element | null>` — fallback DOM reference used when there is no `referenceNode` prop.
- `attrs`: non-prop attributes to forward to the popper.
- `emit`: the `emit` function from `setup`.

The returned `PopperApi` exposes:

- `popperId`: `ComputedRef<string>` — unique ID for accessibility attributes.
- `slotData`: `ComputedRef<PopperSlotData>` — everything `<Popper>` passes to its default slot.
- `state` / `runtime`: internal reactive state.
- `parentPopper`: the enclosing `PopperApi` when nested (sub menus), otherwise `null`.
- `show(options?)` / `hide(options?)` / `dispose()`
- `onResize()`: recompute after the popper content resized.
- `recompute()`: recompute the position.

::: warning
`POPPER_PROVIDE_KEY` (used internally for the parent/child popper relationship) is not part of the package entry point.
:::

### `usePopperMethods`

`usePopperMethods(popper: Ref<PopperMethods | null>)`

Forwards the methods of a `<Popper>` template ref, so a custom component can re-expose them. Returns `{ show, hide, dispose, onResize }`.

```js
const popper = ref(null)
const { show, hide, dispose, onResize } = usePopperMethods(popper)
defineExpose({ show, hide, dispose, onResize })
```

### `usePresetClass`

`usePresetClass(preset: Ref<string>): ComputedRef<string[]>`

Computes the `v-popper--preset-*` classes for a [preset](../guide/presets.md) name, including the classes inherited through `$extend`.

::: warning
This replaces the `ThemeClass` Options API mixin, which is still exported but deprecated. See the [migration guide](../migration/migration-from-v5.md#options-api-mixins).
:::

## Directive options

```html
<button v-tooltip="{
  /* options */
}">
```

The directive also support all the [Component props](#component-props).

### `content`

HTML text to be displayed in the tooltip. Can also be a function that returns the content or a Promise.

```html
<template>
  <button v-tooltip="{ content: 'Hello world' }">
    Hover me
  </button>
</template>
```

If you don't need any other option you can directly put the content in the directive:

```html
<template>
  <button v-tooltip="'Hello world'">
    Hover me
  </button>
</template>
```

Example with a function that returns a Promise:

```html
<template>
  <button v-tooltip="{ content: fetchTooltip }">
    Hover me
  </button>
</template>
```

::: warning
Put the function, not a function call! That way the function is only called when the tooltip is shown.

Don't:

`{ content: fetchTooltip() }`

Do:

`{ content: fetchTooltip }`
:::

### `html`

Boolean: allow HTML tooltip content.

```html
<template>
  <button v-tooltip="{ content: '<i>Italic</i>', html: true }">
    Hover me
  </button>
</template>
```

### `loadingContent`

Same as `content`, used when the actual tooltip content is loading.

```html
<template>
  <button
    v-tooltip="{
      content: fetchTooltip,
      loadingContent: 'Loading tooltip...',
    }"
  >
    Hover me
  </button>
</template>
```

## Component props

### `preset`

Name of the [preset](../guide/presets.md) applied to the popper (default: `'dropdown'`). Looks up `config.presets[name]` for the default value of every other prop, and adds the `v-popper--preset-{name}` CSS class.

```html
<VDropdown preset="info-dropdown" />
```

::: warning `theme` is deprecated
This prop used to be called `theme`. The old name still works and resolves to the same preset, but it will be removed in a future major. If both are set, `preset` wins.
:::

[Learn more](../guide/presets.md)

### `popperClass`

Quick way to add one-time classes to the popper container, for example to limit its width in a specific situation.

::: tip
It's recommended to use [presets](../guide/presets.md) to style the poppers.
:::

### `placement`

Popper placement (default: `'bottom'`).

The available placements are:

 - `'auto'`
 - `'auto-start'`
 - `'auto-end'`
 - `'top'`
 - `'top-start'`
 - `'top-end'`
 - `'right'`
 - `'right-start'`
 - `'right-end'`
 - `'bottom'`
 - `'bottom-start'`
 - `'bottom-end'`
 - `'left'`
 - `'left-start'`
 - `'left-end'`

### `strategy`

Either `absolute` or `fixed` (default: `absolute`). If your reference element is in a fixed container, use the `fixed` strategy.

### `triggers`

Array of events triggering the popper.

Available events:
- `'hover'`
- `'click'`
- `'focus'`
- `'touch'`
- `'pointer'`

Example:

```html
<VDropdown :triggers="['hover', 'focus']"/>
```

If you want to manually trigger the popper, use an empty array: `:triggers="[]"`:

```html
<!-- Manual -->
<VDropdown :triggers="[]"/>
```


### `showTriggers`

Override the trigger events for showing.

Can also be a function that gets the `triggers` list, and should return the new list:

```html
<VDropdown
  :showTriggers="triggers => [...triggers, 'click']"
/>
```

### `hideTriggers`

Override the trigger events for hiding.

Can also be a function that gets the `triggers` list, and should return the new list:

```html
<VDropdown
  :hideTriggers="triggers => [...triggers, 'click']"
/>
```

### `popperTriggers`

Array of events triggering the popper applied on the popper container itself.

Available events:
- `'hover'`
- `'click'`
- `'focus'`
- `'touch'`
- `'pointer'`

For example, it's useful when triggering on `hover` so that the popper stay open when mouse hovering it:

```html
<VDropdown
  :popperTriggers="['hover']"
/>
```

### `popperShowTriggers`

Override the trigger events for showing on the popper container itself.

Can also be a function that gets the `triggers` list, and should return the new list:

```html
<VDropdown
  :popperShowTriggers="triggers => [...triggers, 'click']"
/>
```

### `popperHideTriggers`

Override the trigger events for hiding on the popper container itself.

Can also be a function that gets the `triggers` list, and should return the new list:

```html
<VDropdown
  :popperHideTriggers="triggers => [...triggers, 'click']"
/>
```

### `delay`

Show/Hide delay, or object in ms.

Examples:

```html
<VDropdown :delay="200" />
```

```html
<VDropdown :delay="{ show: 500, hide: 100 }" />
```

### `shown`

Boolean that shows or hide the popper. You should probably use no trigger events (manual mode).

```html
<VDropdown :shown="isMenuShown" :triggers="[]" />
```

### `distance`

Distance along the main axis relative to the reference (pixels).

```html
<VDropdown :distance="12" />
```

### `skidding`

Skidding along the cross axis relative to the reference (pixels).

```html
<VDropdown :skidding="12" />
```

### `arrowPadding`

Padding of the arrow relative to the popper bounds to prevent it from overflowing if you have rounded borders on the popper (pixels).

```html
<VDropdown :arrow-padding="12" />
```

[Learn more](../guide/component.md#arrow-padding)

### `arrowSize`

Size of the arrow. Numbers and numeric strings are interpreted as pixels.

```html
<VDropdown :arrow-size="12" />
```

You can also customize the arrow through CSS variables such as `--v-popper-arrow-size`, `--v-popper-arrow-inner-size`, and `--v-popper-arrow-outer-size`.

### `container`

Selector: Container where the popper will be appended (e.g. `'body'`).

### `boundary`

DOM element for the popper position and size boundaries.

### `autoHide`

Hide the popper if clicked outside.

```html
<VDropdown auto-hide />
```

### `disabled`

Boolean that disables the popper. If it was already open, it will be closed.

### `positioningDisabled`

Boolean that disables the automatic positioning of the popper. You can then style it manually. Useful for mobile version of the popper.

### `handleResize`

Boolean: Automatically update the popper position if its size changes.

```html
<VDropdown handle-resize />
```

### `showGroup`

If set, will close all the open popovers that have a different or unset `showGroup` value.

```html
<VDropdown show-group="my-group-name" />
```

### `instantMove`

Boolean: skip delay & CSS transitions when another popper is open, so that the popper appear to instanly move to the new position.

```html
<VDropdown instant-move />
```

### `eagerMount`

Boolean: mount the popper content without waiting for the popper to be displayed.

```html
<VDropdown eager-mount />
```

### `disposeTimeout`

Number of ms after hide before the popper DOM node is detached. The component instance remains available.

### `computeTransformOrigin`

Computes the transform origin of the `.v-popper__wrapper` to allow zooming effects relative to the reference element.

Example:

```html
<template>
  <VDropdown compute-transform-origin />
</template>

<style>
.v-popper__wrapper {
  transition: transform .15s;
}

.v-popper__popper.v-popper__popper--hidden .v-popper__wrapper {
  transform: scale(.5);
}
</style>
```

[Live example](../guide/css.md#zoom-show-only-example)

### `autoSize`

`Boolean | 'min' | 'max'`: set the size of the popper `inner` container depending on the size of the reference.

- If the final placement is `top-*` or `bottom-*`, the reference width will be taken into account.
- If the final placement is `left-*` or `right-*`, the reference height wll be taken into account.

Possible values:

- `true`: the popper container will be set to the same size as the reference element.
- `'min'`: the popper container will be set to the minimum size of the reference element.
- `'max'`: the popper container will be set to the maximum size of the reference element.

```html
<VDropdown auto-size />
<VDropdown auto-size="min" />
<VDropdown auto-size="max" />
```

### `autoBoundaryMaxSize`

Boolean: let floating vue resize the popper inner container to the available size (using `max-width` and `max-height`). It's very useful for a dropdown that should automatically shrink its size when it reaches the boundary.

```html
<VDropdown auto-boundary-max-size />
```

### `preventOverflow`

Boolean: prevent the popper from overflowing the `boundary`.

```html
<VDropdown :prevent-overflow="false" />
```

### `overflowPadding`

Virtual padding in the `boundary` used to prevent the popper overflow (pixels).

```html
<VDropdown :overflow-padding="10" />
```

### `flip`

Boolean: prevent the popper from overflowing the `boundary` by using an opposite placement if needed.

```html
<VDropdown :flip="false" />
```

### `shift`

Boolean: prevent the popper from overflowing the `boundary` by adjusting its position.

```html
<VDropdown :shift="false" />
```

### `shiftCrossAxis`

Boolean: prevent the popper from overflowing the `boundary` by adjusting its position.

```html
<VDropdown shift-cross-axis />
```

### `noAutoFocus`

Boolean: disable the auto focus on the popper DOM node when shown.

```html
<VDropdown no-auto-focus />
```

### `ariaId`

Id used for the `aria-describedby` attribute. By default a random id.

### `ariaRole`

`String | null`: ARIA role applied to the popper element. Pass `null` to omit the attribute. When the role is `dialog`, `aria-modal="true"` is added while the popper is shown. When the role is `menu`, arrow key navigation is enabled.

Defaults come from the [preset](../guide/presets.md): `'tooltip'`, `'dialog'` and `'menu'` respectively.

```html
<VDropdown aria-role="listbox" />
```

[Learn more](../guide/accessibility.md)

### `focusTrap`

Boolean (default `false`): trap <kbd>Tab</kbd> focus inside the popper while it is shown. <kbd>Tab</kbd> and <kbd>Shift</kbd>+<kbd>Tab</kbd> cycle through the focusable descendants of the popper instead of leaving it.

```html
<VDropdown focus-trap />
```

### `restoreFocus`

Boolean (default `false`): restore focus to the previously focused element when the popper closes.

```html
<VDropdown restore-focus />
```

## Component slots

### `default`

Content put in the trigger part of the popper, typically a button.
  - Props:
    - `shown`: boolean indicating if the popper is shown
    - `show`: method to show the popper
    - `hide`: method to hide the popper

```html
<VDropdown>
  <button>Click me</button>
</VDropdown>
```

### `popper`

Content put inside the popper of the popper.
  - Props:
    - `shown`: boolean indicating if the popper is shown
    - `hide`: method to hide the popper

```html
<VDropdown>
  <button>Click me</button>

  <template #popper="{ hide }">
    Menu content here!
    <button @click="hide()">Close</button>
  </template>
</VDropdown>
```

## Component events

### `update:shown`

Boolean: This allow you to use the `.sync` modifier on the `show` prop (Vue 2) or the `v-model:shown` directive (Vue 3).

```html
<!-- Vue 3 -->
<VDropdown v-model:shown="isMenuShown" />
```

```html
<!-- Vue 2 -->
<VDropdown :shown.sync="isMenuShown" />
```

### `show`

When the popper is going to be shown.

### `apply-show`

Emitted after the show delay.

### `hide`

When the popper is going to be hidden.

### `apply-hide`

Emitted after the hide delay.

### `auto-hide`

Emitted when the popper is closed if clicked outside.

### `close-directive`

Emitted when the popper is closed with the [Close directive](#close-directive-2).

### `close-group`

Emitted when the popper is closed because a popper of another `showGroup` was shown.

### `resize`

Emitted when the content size changes. You must set the `handleResize` prop to `true`.

## Close directive

Use the `v-close-popper` directive on an element inside the dropdown to close it when the element is clicked (or touched on mobile):

```html
<VDropdown>
  <button>Click me</button>

  <template #popper>
    <a v-close-popper>Close</a>
  </template>
</VDropdown>
```

Value: `Boolean` (default: `true`). Pass `false` to disable the directive.

Modifiers:

- `all`: Close all the poppers in the page.

## Types

`floating-vue` ships its own type declarations. The following types are exported from the package entry point:

| Type | Description |
| --- | --- |
| `Placement` | One of the values in [`placements`](#placements). |
| `TriggerEvent` | One of `'hover'`, `'focus'`, `'click'`, `'touch'`, `'pointer'`. |
| `PopperConfig` | Every option that can be set globally, on a preset, or as a component prop. |
| `Config` | The full global configuration: `PopperConfig` plus `presets`. |
| `FloatingVueConfig` | `Partial<Config>` — what you pass to `app.use(FloatingVue, …)`. |
| `PopperPreset` | A single entry of `config.presets`, including `$extend` and `$resetCss`. |
| `PopperProps` | Props accepted by the `<Popper>` component. |
| `PopperSlotData` | What `<Popper>` passes to its default slot. |
| `PopperApi` | Return type of [`usePopper`](#usepopper). |

```ts
import type { FloatingVueConfig, Placement, PopperPreset } from 'floating-vue'
```
