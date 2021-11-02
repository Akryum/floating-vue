---
sidebar: auto
---

# Migration from V2

v-tooltip V3 and V4 (for Vue 3) are complete rewrites compared to V2. This migration guide will help you upgrade!

[GitHub discussion](https://github.com/Akryum/v-tooltip/discussions/603)

## Breaking changes

### PopperJS 2

The underlying positionning library called PopperJS got upgraded from v1 to v2 which includes [a lot of breaking changes](https://popper.js.org/docs/v2/migration-guide/). This is a rewrite of the library so behavior might not be strictly identical to PopperJS v1.

### Global configuration

The global configuration object has completly changed. Instead of having a lot of specific options it is now an object of default values for the [props](../api/#component-props) (like `placement` or `offset`). Additionally, it has a `themes` option to define [themes](../guide/themes.md).

- `defaultPlacement`: use `placement`
- `defaultClass`: removed
- `defaultTargetClass`: removed
- `defaultHtml`: use `html` in the `tooltip` theme (or any theme that you use with the directive)
- `defaultTemplate`: removed
- `defaultArrowSelector`: removed
- `defaultInnerSelector`: removed
- `defaultDelay`: use `delay`
- `defaultTrigger`: use `triggers`, `showTriggers`, `hideTriggers`
- `defaultOffset`: use `offset`
- `defaultContainer`: use `container`
- `defaultBoundariesElement`: use `boundary`
- `defaultPopperOptions`: use `popperOptions`
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
  offset: [0, 0],
  container: 'body',
  boundary: undefined,
  popperOptions: {},
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
      offset: [0, 0],
      container: 'body',
      boundary: undefined,
      autoHide: true,
      handleResize: true,
      popperOptions: {},
    },
  },
}
```

::: tip
You can use the example above to replicate the default config of v-tooltip v2.
:::

[Learn more](../guide/config.md)

### Directive

The `v-tooltip` directive now uses a popper [component](../guide/component.md) internally. This means that there are no longer separate APIs between the components and the directive and you should now be using the components props on the directive object when needed. The directive has a few additional props tough.

Renamed props:

- `trigger` to `triggers` (see [Trigger](#trigger))
- `show` to `shown`
- `boundariesElement` to `boundary`

The following directive options were also removed:

- `classes`
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

The `offset` is now an array in the following format:

```js
[skidding, distance]
```

Before:

```html
<v-popper
  offset="10 0"
/>
```

After:

```html
<VDropdown
  :offset="[0, 10]"
/>
```

[Learn more](../guide/component.md#offset)

### Renamed props

- `boundariesElement` to `boundary`
- `open` to `shown`
- `openGroup` to `showGroup`

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

- `popoverClass`
- `popoverBaseClass`
- `popoverWrapperClass`
- `popoverArrowClass`
- `popoverInnerClass`
- `openClass`

CSS classes [were changed](#css-classes) and in most case you should be fine not customizing them.

### CSS classes

@TODO

### Popper content

The popper HTML content has been simplified. The event listeners (especially `focus`) and attributes (such as `aria-described-by`) are now applied to all the top-level elements found in the default slot instead of an internal div.

The component root element now has `width: max-content` set by default to use the content size instead of the browser default (usually the page width or available space).

The Popper content has changed too, see [CSS Classes](#css-classes) for more information.

Before:

```html
<v-popper> <!-- Listeners & attributes added to internal div -->
  <button>Click me!</button>
  <button>Hey I'm another button!</button>

  <template #popover>
    Some info here
  </template>
</v-popper>
```

After:

```html
<VDropdown>
  <button>Click me!</button> <!-- Listeners & attributes added here -->
  <button>Hey I'm another button!</button> <!-- Listeners & attributes added here -->

  <template #popper>
    Some info here
  </template>
</VDropdown>
```

### Modifiers

Modifiers should now always be specified with the `modifiers` prop instead of the `popperOptions` because additional processing is done on them before passing them to PopperJS.

The modifiers syntax changed and is now an array of objects, [learn more here](https://popper.js.org/docs/v2/modifiers/).

Before:

```html
<v-popper
  :popper-options="{
    modifiers: {
      flip: {
        enabled: false,
      },
    },
  }"
/>
```

After:

```html
<VDropdown
  :modifiers="[
    {
      name: 'flip',
      enabled: false,
    },
  ]"
/>
```

