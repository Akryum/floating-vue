---
sidebar: auto
---

# Migration from V2

v-tooltip V3 and V4 (for Vue 3) are complete rewrites compared to V2. This migration guide will help you upgrade!

[GitHub discussion](https://github.com/Akryum/v-tooltip/discussions/603)

## Breaking changes

### PopperJS 2

The underlying positionning library called PopperJS got upgraded from v1 to v2 which includes [a lot of breaking changes](https://popper.js.org/docs/v2/migration-guide/). This is a rewrite of the library so behavior might not be strictly identical to PopperJS v1.

### Modifiers

@TODO

### Global configuration

The global configuration object has completly changed.

@TODO

### Directive

The `v-tooltip` directive now uses a popper [component](../guide/component.md) internally. This means that there are no longer separate APIs between the components and the directive and you should now be using the components props on the directive object when needed. The directive has a few additional props tough ([learn more](../guide/directive.md)).

@TODO renamed options to match component props

The following directive options were also removed:
- `classes`
- `targetClasses`
- `template`
- `arrowSelector`
- `innerSelector`
- `hideOnTargetClick` (replaced by `hideTriggers`)
- `loadingClass`

@TODO before/after

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
