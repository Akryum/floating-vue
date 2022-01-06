---
sidebar: auto
depth: 3
---

# API Reference

## Global

### `hideAllPoppers`

Hides all shown poppers.

```js
import { hideAllPoppers } from 'v-tooltip'

hideAllPoppers()
```

### `createTooltip`

`createTooltip(el, valueOrOptions, directiveModifiers)` creates a tooltip on a given element.

```js
import { createTooltip, destroyTooltip } from 'v-tooltip'

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

### `offset`

An array to modify the position of the popper with relative pixels: `[skidding, distance]`

```vue
<VDropdown :offset="[0, 12]" />
```

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

### `ariaId`

Id used for the `aria-describedby` attribute. By default a random id.

### `modifiers`

Array of Popper.js [modifier objects](https://popper.js.org/docs/v2/modifiers/).

For example, to disable the `flip` modifier:

```vue
<VDropdown
  :modifiers="[
    {
      name: 'flip',
      enabled: false,
    },
  ]"
/>
```

### `popperOptions`

Other [Popper.js options](https://popper.js.org/docs/v2/constructors/). It's recommended to use props when available instead of the popper options to optimize the component updates.

```vue
<VDropdown
  :popper-options="{
    onFirstUpdate: (state) => {},
  }"
/>
```

## Component slots

### `default`

Content put in the trigger part of the popper, typically a button.

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
