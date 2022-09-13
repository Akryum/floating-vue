---
sidebar: auto
depth: 3
---

# API Reference

## Global

### `hideAllPoppers`

Hides all shown poppers.

```js
import { hideAllPoppers } from 'floating-vue'

hideAllPoppers()
```

### `createTooltip`

`createTooltip(el, valueOrOptions, directiveModifiers)` creates a tooltip on a given element.

```js
import { createTooltip, destroyTooltip } from 'floating-vue'

export function clipboardSuccess (el) {
  const tooltip = createTooltip(el, {
    triggers: [],
    content: 'Text copied!',
  })
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

## Directive options

```vue
<button v-tooltip="{
  /* options */
}">
```

The directive also support all the [Component props](#component-props).

### `content`

HTML text to be displayed in the tooltip. Can also be a function that returns the content or a Promise.

```vue
<template>
  <button v-tooltip="{ content: 'Hello world' }">
    Hover me
  </button>
</template>
```

If you don't need any other option you can directly put the content in the directive:

```vue
<template>
  <button v-tooltip="'Hello world'">
    Hover me
  </button>
</template>
```

Example with a function that returns a Promise:

```vue
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

```vue
<template>
  <button v-tooltip="{ content: '<i>Italic</i>', html: true }">
    Hover me
  </button>
</template>
```

### `loadingContent`

Same as `content`, used when the actual tooltip content is loading.

```vue
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

### `theme`

The popper theme applied to the popper  (default: `'dropdown'`).

[Learn more](../guide/themes.md)

### `popperClass`

Quick way to add one-time classes to the popper container, for example to limit its width in a specific situation.

::: tip
It's recommended to use [themes](../guide/themes.md) to style the poppers.
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

Example:

```vue
<VDropdown :triggers="['hover', 'focus']"/>
```

If you want to manually trigger the popper, use an empty array: `:triggers="[]"`:

```vue
<!-- Manual -->
<VDropdown :triggers="[]"/>
```


### `showTriggers`

Override the trigger events for showing.

Can also be a function that gets the `triggers` list, and should return the new list:

```vue
<VDropdown
  :showTriggers="triggers => [...triggers, 'click']"
/>
```

### `hideTriggers`

Override the trigger events for hiding.

Can also be a function that gets the `triggers` list, and should return the new list:

```vue
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

For example, it's useful when triggering on `hover` so that the popper stay open when mouse hovering it:

```vue
<VDropdown
  :popperTriggers="['hover']"
/>
```

### `popperShowTriggers`

Override the trigger events for showing on the popper container itself.

Can also be a function that gets the `triggers` list, and should return the new list:

```vue
<VDropdown
  :popperShowTriggers="triggers => [...triggers, 'click']"
/>
```

### `popperHideTriggers`

Override the trigger events for hiding on the popper container itself.

Can also be a function that gets the `triggers` list, and should return the new list:

```vue
<VDropdown
  :popperHideTriggers="triggers => [...triggers, 'click']"
/>
```

### `delay`

Show/Hide delay, or object in ms.

Examples:

```vue
<VDropdown :delay="200" />
```

```vue
<VDropdown :delay="{ show: 500, hide: 100 }" />
```

### `shown`

Boolean that shows or hide the popper. You should probably use no trigger events (manual mode).

```vue
<VDropdown :shown="isMenuShown" :triggers="[]" />
```

### `distance`

Distance along the main axis relative to the reference (pixels).

```vue
<VDropdown :distance="12" />
```

### `skidding`

Skidding along the cross axis relative to the reference (pixels).

```vue
<VDropdown :skidding="12" />
```

### `arrowPadding`

Padding of the arrow relative to the popper bounds to prevent it from overflowing if you have rounded borders on the popper (pixels).

```vue
<VDropdown :arrow-padding="12" />
```

[Learn more](../guide/component.md#arrow-padding)

### `container`

Selector: Container where the popper will be appended (e.g. `'body'`).

### `boundary`

DOM element for the popper position and size boundaries.

### `autoHide`

Hide the popper if clicked outside.

```vue
<VDropdown auto-hide />
```

### `disabled`

Boolean that disables the popper. If it was already open, it will be closed.

### `positioningDisabled`

Boolean that disables the automatic positioning of the popper. You can then style it manually. Useful for mobile version of the popper.

### `handleResize`

Boolean: Automatically update the popper position if its size changes.

```vue
<VDropdown handle-resize />
```

### `showGroup`

If set, will close all the open popovers that have a different or unset `showGroup` value.

```vue
<VDropdown show-group="my-group-name" />
```

### `instantMove`

Boolean: skip delay & CSS transitions when another popper is open, so that the popper appear to instanly move to the new position.

```vue
<VDropdown instant-move />
```

### `eagerMount`

Boolean: mount the popper content without waiting for the popper to be displayed.

```vue
<VDropdown eager-mount />
```

### `disposeTimeout`

Number of ms after hide when the popper instance is destroyed.

### `computeTransformOrigin`

Computes the transform origin of the `.v-popper__wrapper` to allow zooming effects relative to the reference element.

Example:

```vue
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

```vue
<VDropdown auto-size />
<VDropdown auto-size="min" />
<VDropdown auto-size="max" />
```

### `autoBoundaryMaxSize`

Boolean: let floating vue resize the popper inner container to the available size (using `max-width` and `max-height`). It's very useful for a dropdown that should automatically shrink its size when it reaches the boundary.

```vue
<VDropdown auto-boundary-max-size />
```

### `preventOverflow`

Boolean: prevent the popper from overflowing the `boundary`.

```vue
<VDropdown :prevent-overflow="false" />
```

### `overflowPadding`

Virtual padding in the `boundary` used to prevent the popper overflow (pixels).

```vue
<VDropdown :overflow-padding="10" />
```

### `flip`

Boolean: prevent the popper from overflowing the `boundary` by using an opposite placement if needed.

```vue
<VDropdown :flip="false" />
```

### `shift`

Boolean: prevent the popper from overflowing the `boundary` by adjusting its position.

```vue
<VDropdown :shift="false" />
```

### `shiftCrossAxis`

Boolean: prevent the popper from overflowing the `boundary` by adjusting its position.

```vue
<VDropdown shift-cross-axis />
```

### `noAutoFocus`

Boolean: disable the auto focus on the popper DOM node when shown.

```vue
<VDropdown no-auto-focus />
```

### `ariaId`

Id used for the `aria-describedby` attribute. By default a random id.

## Component slots

### `default`

Content put in the trigger part of the popper, typically a button.
  - Props:
    - `shown`: boolean indicating if the popper is shown
    - `show`: method to show the popper
    - `hide`: method to hide the popper

```vue
<VDropdown>
  <button>Click me</button>
</VDropdown>
```

### `popper`

Content put inside the popper of the popper.
  - Props:
    - `shown`: boolean indicating if the popper is shown
    - `hide`: method to hide the popper

```vue
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

```vue
<!-- Vue 3 -->
<VDropdown v-model:shown="isMenuShown" />
```

```vue
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

### `dispose`

Popper instance is destroyed.

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

```vue
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
