# Presets

A preset is a named bundle of default prop values, declared in the `presets` object of the [global configuration](./config.md). It categorizes the different kinds of popper you want to have in your application — you'll usually need "tooltips", "dropdowns" or "menus", each looking and behaving differently.

By default, floating-vue provides three presets:
- `tooltip` (used by the `v-tooltip` directive and the `VTooltip` component)
- `dropdown` (used by the `VDropdown` component)
- `menu` (used by the `VMenu` component)

The preset of a popper directive or component can be changed with the `preset` prop:

```html
<button v-tooltip="{
  preset: 'dropdown'
}">
```

```html
<VDropdown
  preset="menu"
>
```

::: warning `theme` is deprecated
This prop used to be called `theme`. The old name still works and resolves to the same preset, but it will be removed in a future major. If both are set, `preset` wins.
:::

A preset object can contain default values of all [available props](../api/).

For example, this `info-tooltip` preset:

```js
Vue.use(FloatingVue, {
  presets: {
    'info-tooltip': {
      distance: 24,
      delay: { show: 1000, hide: 0 },
    },
  },
})
```

See the [global configuration](./config.md#default-values) for the values used in the default presets.

## Custom preset

To customize your tooltips and other popovers, you can create your own presets:

```js
Vue.use(FloatingVue, {
  presets: {
    'info-tooltip': {
      $extend: 'tooltip',
      // Other options (see the 'Global options' section)
    },
  },
})
```

Here, `$extend: 'tooltip'` extends the `tooltip` preset defined by default inside `floating-vue`, so all its options and CSS classes are inherited.

If you don't want to inherit the CSS classes, use `$resetCss`:

```js
Vue.use(FloatingVue, {
  presets: {
    'info-tooltip': {
      $extend: 'tooltip',
      $resetCss: true,
    },
  },
})
```

In TypeScript projects, wrap the preset with [`definePopperPreset`](../api/#definepopperpreset) to get autocomplete and excess-property checks.

To use the new preset, specify it on the directive:

```html
<button v-tooltip="{
  content: 'You have ' + count + ' new messages.',
  preset: 'info-tooltip'
}">
```

Then you can customize the CSS for this preset:

```css
.v-popper--preset-info-tooltip {
  .v-popper__inner {
    background: #004499;
  }

  .v-popper__arrow-inner {
    border-color: #004499;
  }
}
```

::: tip
You can use the [Preset Editor](../theme-editor.md) to build your floating-vue presets!
:::

## Preset component

After you have created your new preset, you can use it with the `preset` prop like we saw above, or you can create a reusable component that directly uses it. It's also a good way to organize your code by putting the preset's relevant CSS in the component `<style>` block.

Let's have this example custom preset called `info-dropdown`:

```js
Vue.use(FloatingVue, {
  presets: {
    'info-dropdown': {
      $extend: 'dropdown',
      // Other options (see the 'Global options' section)
      placement: 'right',
      delay: 300,
    },
  },
})
```

We can then create a Preset Component by wrapping the `PopperWrapper` component from `floating-vue` and passing the preset name:

```vue
<script setup>
import { PopperWrapper } from 'floating-vue'
</script>

<template>
  <PopperWrapper preset="info-dropdown">
    <slot />

    <template #popper="slotProps">
      <slot
        name="popper"
        v-bind="slotProps"
      />
    </template>
  </PopperWrapper>
</template>

<style>
.v-popper--preset-info-dropdown .v-popper__inner {
  background: #004499;
}

.v-popper--preset-info-dropdown .v-popper__arrow-inner {
  border-color: #004499;
}
</style>
```

Notice how we also add some CSS here related to our `info-dropdown` preset.

Alternatively, a component built by spreading `PopperWrapper` can bake the preset into its
options with `vPopperPreset`, which is how `VDropdown`, `VMenu` and `VTooltip` used to be built:

```js
import { PopperWrapper } from 'floating-vue'

export default {
  ...PopperWrapper,
  name: 'VInfoDropdown',
  vPopperPreset: 'info-dropdown',
}
```

::: warning `vPopperTheme` is deprecated
This option used to be called `vPopperTheme`. The old name still works, but it will be removed
in a future major.
:::

Here is an example of using our new component in the rest of our code:

```html
<VInfoDropdown>
  <button>My customized dropdown</button>

  <template #popper>
    Hello world
  </template>
</VInfoDropdown>
```
