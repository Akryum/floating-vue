---
sidebar: auto
---

# Migration from v-tooltip 2

floating-vue is a complete rewrite compared to v-tooltip. This migration guide will help you upgrade!

[GitHub discussion](https://github.com/Akryum/v-tooltip/discussions/603)

## Breaking changes

### Package renamed

`v-tooltip` => `floating-vue`

| floating-vue | NPM Tag | Vue compatibility |
| ------------ | ------- | ----------------- |
| 2.x          | latest  | 3.x               |
| 1.x          | vue2    | 2.x               |

### Floating UI

The positionning library has changed from `popperjs` to [`floating-ui`](https://floating-ui.com/) which is the spiritual successor.

### Global configuration

The global configuration object has completly changed. Instead of having a lot of specific options it is now an object of default values for the [props](../api/#component-props) (like `placement` or `distance`). Additionally, it has a `themes` option to define [themes](../guide/themes.md).

- `defaultPlacement`: use `placement`
- `defaultClass`: removed
- `defaultTargetClass`: removed
- `defaultHtml`: use `html` in the `tooltip` theme (or any theme that you use with the directive)
- `defaultTemplate`: removed
- `defaultArrowSelector`: removed
- `defaultInnerSelector`: removed
- `defaultDelay`: use `delay`
- `defaultTrigger`: use `triggers`, `showTriggers`, `hideTriggers`
- `defaultOffset`: use `distance` and/or `skidding`
- `defaultContainer`: use `container`
- `defaultBoundariesElement`: use `boundary`
- `defaultPopperOptions`: removed
- `defaultLoadingClass`: removed
- `defaultLoadingContent`: use `loadingContent` in the `tooltip` theme (or any theme that you use with the directive)
- `autoHide`: unchanged
- `defaultHideOnTargetClick`: use `hideTriggers`
- `disposeTimeout`: unchanged
- `popover`: removed, use [themes](../guide/themes.md) instead

Before:

```js
{
  defaultPlacement: 'top',
  defaultClass: 'vue-tooltip-theme',
  defaultTargetClass: 'has-tooltip',
  defaultHtml: true,
  defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  defaultArrowSelector: '.tooltip-arrow, .tooltip__arrow',
  defaultInnerSelector: '.tooltip-inner, .tooltip__inner',
  defaultDelay: 0,
  defaultTrigger: 'hover focus',
  defaultOffset: 0,
  defaultContainer: 'body',
  defaultBoundariesElement: undefined,
  defaultPopperOptions: {},
  defaultLoadingClass: 'tooltip-loading',
  defaultLoadingContent: '...',
  autoHide: true,
  defaultHideOnTargetClick: true,
  disposeTimeout: 5000,
  popover: {
    defaultPlacement: 'bottom',
    defaultClass: 'vue-popover-theme',
    defaultBaseClass: 'tooltip popover',
    defaultWrapperClass: 'wrapper',
    defaultInnerClass: 'tooltip-inner popover-inner',
    defaultArrowClass: 'tooltip-arrow popover-arrow',
    defaultOpenClass: 'open',
    defaultDelay: 0,
    defaultTrigger: 'click',
    defaultOffset: 0,
    defaultContainer: 'body',
    defaultBoundariesElement: undefined,
    defaultPopperOptions: {},
    defaultAutoHide: true,
    defaultHandleResize: true,
  },
}
```

After:

```js
{
  placement: 'top',
  delay: 0,
  distance: 0,
  container: 'body',
  boundary: undefined,
  autoHide: true,
  disposeTimeout: 5000,
  themes: {
    tooltip: {
      html: true,
      triggers: ['hover', 'focus'],
      hideTriggers: triggers => [...triggers, 'click'],
      loadingContent: '...',
    },
    dropdown: {
      placement: 'bottom',
      delay: 0,
      triggers: ['click'],
      distance: 0,
      container: 'body',
      boundary: undefined,
      autoHide: true,
      handleResize: true,
    },
  },
}
```

::: tip
You can use the example above to replicate the default config of v-tooltip v2.
:::

[Learn more](../guide/config.md)

### Directive

The `v-tooltip` directive now uses a popper [component](../guide/component.md) internally. This means that there are no longer separate APIs between the components and the directive and you should now be using the components props on the directive object when needed. The directive has [a few additional props](../api/README.md#directive-options) tough.

Changed defaults:

- `html` is now `false` by default to help you void XSS attacks.

Renamed props:

- `trigger` to `triggers` (see [Trigger](#trigger))
- `show` to `shown`
- `boundariesElement` to `boundary`
- `classes` to `popperClass`

The following directive options were also removed:

- `targetClasses`
- `template`
- `arrowSelector`
- `innerSelector`
- `hideOnTargetClick` (replaced by `hideTriggers`)
- `loadingClass`

[Learn more](../guide/directive.md)

### Default component

`<v-popper>` component was removed. Instead use `<VDropdown>` or any other [builtin](../guide/component.md) (or [custom](../guide/themes.md)) components.

Before:

```html
<v-popper/>
```

After:

```html
<VDropdown/>
```

[Learn more](../guide/component.md)

### Trigger

The `trigger` prop was renamed to `triggers` and is now an array of events.

Before:

```html
<v-popper trigger="click focus"/>
```

After:

```html
<VDropdown :triggers="['click', 'focus']"/>
```

The `manual` event was removed. Instead use an empty array:

Before:

```html
<v-popper trigger="manual"/>
```

After:

```html
<VDropdown :triggers="[]"/>
```

There are a range of new props accompanying `triggers`:

- `showTriggers`
- `hideTriggers`
- `popperTriggers`
- `showPopperTriggers`
- `hidePopperTriggers`

[Learn more](../guide/component.md#triggers)

### Offset

The `offset` is now two separate props: `distance` and `skidding`.

Before:

```html
<v-popper
  offset="10 0"
/>
```

After:

```html
<VDropdown
  distance="10"
  skidding="0"
/>
```

[Learn more](../guide/component.md#offset)

### Renamed props

- `boundariesElement` to `boundary`
- `open` to `shown`
- `openGroup` to `showGroup`
- `popoverClass` to `popperClass`

Plus the default component slot props:

- `isOpen` to `shown`

Before:

```html
<v-popper
  boundaries-element="..."
  open="..."
  open-group="..."
>
  <template #default="{ isOpen }">
    <!-- ... -->
  </template>
</v-popper>
```

After:

```html
<VDropdown
  boundary="..."
  shown="..."
  show-group="..."
>
  <template #default="{ shown }">
    <!-- ... -->
  </template>
</VDropdown>
```

### Renamed slots

- `popover` to `popper`

Before:

```html
<v-popper>
  <button>
    Click me!
  </button>

  <template #popover>
    I am a dropdown
  </template>
</v-popper>
```

After:

```html
<VDropdown>
  <button>
    Click me!
  </button>

  <template #popper>
    I am a dropdown
  </template>
</VDropdown>
```

### Renamed directives

- `v-close-popover` to `v-close-popper`

### Removed props

The following props were removed and are no longer available:

- `popoverBaseClass`
- `popoverWrapperClass`
- `popoverArrowClass`
- `popoverInnerClass`
- `openClass`
- `modifiers`
- `popperOptions`

### CSS classes

The structure of the HTML produced by the library has changed. Most classes are now using a BEM-like notation with the `v-popper` prefix. They are no longer customizable since they don't conflict with other libraries such as boostrap. You can add your own classes to the poppers with [themes](../guide/themes.md) (recommended) or the `popperClass` prop.  
[Learn more about CSS classes](../guide/css.md)

Changed classes:

- `v-popover` to `v-popper`
- `open` (default value) to `v-popper--shown`

Before:

```html
<div class="v-popover open">
  <div
    class="trigger"
    style="display: inline-block;"
  >
    <!-- Default slot -->
  </div>
</div>
```

After:

```html
<div class="v-popper v-popper--shown">
  <!-- Default slot -->
</div>
```

#### Popper content

Changed classes:

- `tooltip popover` (default value) to `v-popper__popper`.
- `vue-tooltip-theme` (default value) is replaced by [theme classes](../guide/css.md#theme-classes).
- `open` (default value) to `v-popper__popper--shown` and `v-popper__popper--hidden`.
- `wrapper` (default value) to `v-popper__wrapper`.
- `tooltip-inner popover-inner` (default value) to `v-popper__inner`.
- `tooltip-arrow popover-arrow` (default value) to `v-popper__arrow-outer` and `v-popper__arrow-inner`.

New classes:

- `v-popper__arrow-container`
- on `v-popper__popper`:
  - `v-popper__popper--skip-transition`
  - `v-popper__popper--show-from`
  - `v-popper__popper--show-to`
  - `v-popper__popper--hide-from`
  - `v-popper__popper--hide-to`

Before:

```html
<div
  class="tooltip popover vue-tooltip-theme open"
  :style="{
    visibility: isOpen ? 'visible' : 'hidden',
  }"
>
  <div class="wrapper">
    <div
      class="tooltip-inner popover-inner"
      style="position: relative;"
    >
      <div>
        <!-- Popover slot -->
      </div>
    </div>
    <div class="tooltip-arrow popover-arrow" />
  </div>
</div>
```

After:

```html
<div class="v-popper__popper">
  <div class="v-popper__wrapper">
    <div class="v-popper__inner">
      <div>
        <!-- Popper slot -->
      </div>
    </div>

    <div class="v-popper__arrow-container">
      <div class="v-popper__arrow-outer" />
      <div class="v-popper__arrow-inner" />
    </div>
  </div>
</div>
```

#### Directive

The `v-tooltip` directive now uses the same component and thus has the same HTML result as the other components such as `VDropdown`.

Before (default):

```html
<div class="tooltip" role="tooltip">
  <div class="tooltip-arrow"></div>
  <div class="tooltip-inner">Text here</div>
</div>
```

After:

```html
<div class="v-popper__popper v-popper--theme-tooltip">
  <div class="v-popper__wrapper">
    <div class="v-popper__inner">
      <div>
        Text here
      </div>
    </div>

    <div class="v-popper__arrow-container">
      <div class="v-popper__arrow-outer" />
      <div class="v-popper__arrow-inner" />
    </div>
  </div>
</div>
```

The loading class on the popper element changed from `tooltip-loading` (default value) to `v-popper--tooltip-loading`.

Before:

```html
<div class="tooltip tooltip-loading" role="tooltip">
  <div class="tooltip-arrow"></div>
  <div class="tooltip-inner">Loading...</div>
</div>
```

After:

```html
<div class="v-popper__popper v-popper--theme-tooltip v-popper--tooltip-loading">
  <div class="v-popper__wrapper">
    <div class="v-popper__inner">
      <div>
        Loading...
      </div>
    </div>

    <div class="v-popper__arrow-container">
      <div class="v-popper__arrow-outer" />
      <div class="v-popper__arrow-inner" />
    </div>
  </div>
</div>
```

On the target element, the `has-tooltip` (default value) is now `v-popper--has-tooltip` and is no longer customizable.

Before:

```html
<button class="has-tooltip">
```

After:

```html
<button class="v-popper--has-tooltip">
```

[Learn more](../guide/css.md)

### Default slot

The way the default slot works has been simplified. The event listeners (especially `focus`) and attributes (such as `aria-described-by`) are now applied to all the top-level elements found in the default slot instead of an internal div.

The component root element now has `width: max-content` set by default to use the content size instead of the browser default (usually the page width or available space).

Before:

```vue
<v-popper> <!-- Listeners & attributes added to internal div -->
  <button>Click me!</button>
  <button>Hey I'm another button!</button>

  <template #popover>
    Some info here
  </template>
</v-popper>
```

After:

```vue
<VDropdown>
  <button>Click me!</button> <!-- Listeners & attributes added here -->
  <button>Hey I'm another button!</button> <!-- Listeners & attributes added here -->

  <template #popper>
    Some info here
  </template>
</VDropdown>
```

### Modifiers

`floating-ui` doesn't have a modifier system like popperjs. It has been replaced with new props.

#### Prevent overflow

New props: 

- `preventOverflow` (boolean)
- `overflowPadding` (px)
- `shiftCrossAxis` (boolean)

```vue
<!-- Before -->
<VDropdown :popper-options="{
  modifiers: { preventOverflow: { enabled: false } }
}" />

<!-- After -->
<VDropdown :prevent-overflow="false" />
```

```vue
<!-- Before -->
<VDropdown :popper-options="{
  modifiers: { preventOverflow: { options: { padding: 10 } } }
}" />

<!-- After -->
<VDropdown :overflow-padding="10" />
```

```vue
<!-- Before -->
<VDropdown :popper-options="{
  modifiers: { preventOverflow: { options: { altAxis: true } } }
}" />

<!-- After -->
<VDropdown shift-cross-axis />
```

#### Flip

New prop:

- `flip` (boolean)

```vue
<!-- Before -->
<VDropdown :popper-options="{
  modifiers: { flip: { enabled: false } }
}" />

<!-- After -->
<VDropdown :flip="false" />
```

#### Arrow

New prop:

- `arrowPadding` (px)

```vue
<!-- Before -->
<VDropdown :popper-options="{
  modifiers: { arrow: { options: { padding: 12 } } }
}" />

<!-- After -->
<VDropdown :arrow-padding="12" />
```

## New features

The new package supports Vue 3 in addition to Vue 2.

### Themes

Themes are a powerful and simple way to create multiple kinds of floating components. Application usually have many of them: tooltip, dropdown, menus, selects, etc. Each theme specify the default props values or/and the styling through the associated CSS classes.

Themes can extend each other:

```js
app.use(FloatingVue, {
  themes: {
    select: {
      $extend: 'dropdown', // builtin theme
      triggers: ['click', 'touch', 'hover', 'focus'],
      distance: 6,
      delay: 0,
    },
    'multi-select': {
      $extend: 'select',
      triggers: ['click', 'touch'],
      distance: 10,
    },
  },
})
```

[Learn more](../guide/themes.md)

### Global configuration

The global configuration is now simply an object of the popper props (except special properties starting with `$` such as `$extend` and `$resetCss`, in addition to `themes`). The values will be used by default.

[Learn more](../guide/config.md)

### Unified API

Everything is simpler! The direct and the components now shares the same underlying `Popper` component with the same props (plus a few specific ones for the directive).

```vue
<button v-tooltip="{
  triggers: ['click'],
  distance: 12,
}">Action</button>
```

```vue
<VTooltip
  :triggers="['click']"
  :distance="12"
>
  <button>Action</button>
</VTooltip>
```

### Built-in components

floating-ui ships with pre-built component and a minimal CSS file to help you get started:

```js
import 'floating-vue/dist/style.css'
```

```vue
<!-- 'dropdown' theme -->
<VDropdown>
  <button>Click me!</button>
  <template #popper>
    Nice job!
  </template>
</VDropdown>

<!-- 'menu' theme -->
<VMenu>
  <button>Hover me!</button>
  <template #popper>
    More buttons here
  </template>
</VMenu>

<!-- 'tooltip' theme -->
<VTooltip>
  <button>Hover me!</button>
  <template #popper>
    Some information
  </template>
</VTooltip>
```

### Auto min size

You can now let floating vue restrict the popper inner container to the reference size (using `min-width` or `min-height`). Usually when creating form inputs such as selects, you probably want to apply the minimum width of the input to the popper.

```vue
<VDropdown auto-min-size />
```

### Auto max size

You can now let floating vue resize the popper inner container to the available size (using `max-width` or `max-height`). It's very useful for a dropdown that should automatically shrink its size when it reaches the boundary.

```vue
<VDropdown auto-max-size />
```

### Compute Transform Origin

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

<ZoomShowOnlyExample />
