---
sidebar: auto
---

# Migration from v-tooltip 3 & 4

## Breaking changes

### Package rename

Since the package has grown much past the `v-tooltip` directive, it has been renamed to `floating-vue`.

| v-tooltip  | floating-vue | NPM Tag | Vue compatibility |
| ---------- | ------------ | ------- | ----------------- |
| 4.x-beta.x | 5.x          | latest  | 3.x               |
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

The default `padding` for the `dropdown` preset has been removed. You can add your own padding like this:

```css
.v-popper--preset-dropdown .v-popper__inner {
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

```html
<!-- Before -->
<VDropdown :modifiers="[ { name: 'preventOverflow', enabled: false } ]" />

<!-- After -->
<VDropdown :prevent-overflow="false" />
```

```html
<!-- Before -->
<VDropdown :modifiers="[ { name: 'preventOverflow', options: { padding: 10 } } ]" />

<!-- After -->
<VDropdown :overflow-padding="10" />
```

```html
<!-- Before -->
<VDropdown :modifiers="[ { name: 'preventOverflow', options: { altAxis: true } } ]" />

<!-- After -->
<VDropdown shift-cross-axis />
```

#### Flip

New prop:

- `flip` (boolean)

```html
<!-- Before -->
<VDropdown :modifiers="[ { name: 'flip', enabled: false } ]" />

<!-- After -->
<VDropdown :flip="false" />
```

#### Arrow

New prop:

- `arrowPadding` (px)

```html
<!-- Before -->
<VDropdown :modifiers="[ { name: 'arrow', options: { padding: 12 } } ]" />

<!-- After -->
<VDropdown :arrow-padding="12" />
```

### `themes` renamed to `presets`

The global config key is now `presets`, and the CSS class it produces went from `v-popper--theme-{name}` to `v-popper--preset-{name}`.

```js
// Before
app.use(FloatingVue, { themes: { 'info-tooltip': { $extend: 'tooltip' } } })
// After
app.use(FloatingVue, { presets: { 'info-tooltip': { $extend: 'tooltip' } } })
```

```css
/* Before */
.v-popper--theme-info-tooltip { /* ... */ }
/* After */
.v-popper--preset-info-tooltip { /* ... */ }
```

Both old spellings still work and are deprecated:

- a `themes` option, and `options.themes` at runtime, read and write the same object as `presets`;
- every popper still carries the matching `v-popper--theme-{name}` class next to `v-popper--preset-{name}`, so existing stylesheets keep applying.

### `theme` prop renamed to `preset`

To match the config key, the prop that selects a preset is now called `preset`:

```html
<!-- Before -->
<VDropdown theme="info-dropdown" />
<button v-tooltip="{ content: 'Hi', theme: 'info-tooltip' }" />

<!-- After -->
<VDropdown preset="info-dropdown" />
<button v-tooltip="{ content: 'Hi', preset: 'info-tooltip' }" />
```

`theme` is still accepted as a deprecated alias on every component and on the directive options, so this migration can be done gradually. It will be removed in a future major. If both are set, `preset` wins.

### Custom popper components

Advanced custom components now use Composition API helpers instead of old shared option helpers:

- Use direct component imports with `<script setup>` instead of `Popper: Popper()`.
- Replace the `PopperMethods` mixin with the [`usePopperMethods`](../api/#usepoppermethods) composable.
- Replace the `ThemeClass` mixin with the [`usePresetClass`](../api/#usepresetclass) composable.
- Rename the `vPopperTheme` component option to `vPopperPreset`.

Both mixins are still exported and still work, as is `vPopperTheme`. All three are deprecated and will be removed in a future major.

See the [custom component guide](../guide/custom-component.md) for an updated example.

## New features

### `v-popper__popper--arrow-overflow`

The `v-popper__popper--arrow-overflow` class is added on the `v-popper_popper` element when the arrow is overflowing past the reference bounds. By default, `v-popper__arrow-container` has `display: none;` which hides the arrow.

### Auto max size

You can now let floating vue resize the popper inner container to the available size (using `max-width` and `max-height`). It's very useful for a dropdown that should automatically shrink its size when it reaches the boundary.

```html
<VDropdown auto-max-size />
```
