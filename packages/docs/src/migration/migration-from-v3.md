---
sidebar: auto
---

# Migration from v-tooltip 3 & 4

## Breaking changes

### Package rename

Since the package has grown much past the `v-tooltip` directive, it has been renamed to `floating-vue`.

| v-tooltip  | floating-vue | NPM Tag | Vue compatibility |
| ---------- | ------------ | ------- | ----------------- |
| 4.x-beta.x | 2.x          | latest  | 3.x               |
| 3.x-beta.x | 1.x          | vue2    | 2.x               |

### Popperjs

The positionning library has changed from [`popperjs 2`](https://popper.js.org/) to [`floating-ui`](https://floating-ui.com/) which is the spiritual successor.

### Offset

As it was too confusing, the `offset` is now two separate props: `distance` and `skidding`.

Before:

```html
<VDropdown
  :offset="[0, 10]"
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

### Removed props

- `modifiers`
- `popperOptions`

### CSS

The default `padding` for the `dropdown` theme has been removed. You can add your own padding like this:

```css
.v-popper--theme-dropdown .v-popper__inner {
  padding: 6px;
}
```

It will be added in a future Vue 3-only major version of floating-vue with CSS variables.

### Modifiers

`floating-ui` doesn't have a modifier system like popperjs. It has been replaced with new props.

#### Prevent overflow

New props: 

- `preventOverflow` (boolean)
- `overflowPadding` (px)
- `shiftCrossAxis` (boolean)

```vue
<!-- Before -->
<VDropdown :modifiers="[ { name: 'preventOverflow', enabled: false } ]" />

<!-- After -->
<VDropdown :prevent-overflow="false" />
```

```vue
<!-- Before -->
<VDropdown :modifiers="[ { name: 'preventOverflow', options: { padding: 10 } } ]" />

<!-- After -->
<VDropdown :overflow-padding="10" />
```

```vue
<!-- Before -->
<VDropdown :modifiers="[ { name: 'preventOverflow', options: { altAxis: true } } ]" />

<!-- After -->
<VDropdown shift-cross-axis />
```

#### Flip

New prop:

- `flip` (boolean)

```vue
<!-- Before -->
<VDropdown :modifiers="[ { name: 'flip', enabled: false } ]" />

<!-- After -->
<VDropdown :flip="false" />
```

#### Arrow

New prop:

- `arrowPadding` (px)

```vue
<!-- Before -->
<VDropdown :modifiers="[ { name: 'arrow', options: { padding: 12 } } ]" />

<!-- After -->
<VDropdown :arrow-padding="12" />
```

## New features

### `v-popper__popper--arrow-overflow`

The `v-popper__popper--arrow-overflow` class is added on the `v-popper_popper` element when the arrow is overflowing past the reference bounds. By default, `v-popper__arrow-container` has `display: none;` which hides the arrow.

### Auto max size

You can now let floating vue resize the popper inner container to the available size (using `max-width` and `max-height`). It's very useful for a dropdown that should automatically shrink its size when it reaches the boundary.

```vue
<VDropdown auto-max-size />
```
