
# Custom popper component

::: warning
This is an advanced API! You are advised to get familiar with the library before trying this.
:::

You can create an entirely custom component to use as a popper. v-tooltip exposes the following building blocks:

- `Popper` (component): main logic component and integration with popperjs
- `PopperContent` (component): standard minimal popper content with all the needed containers and CSS classes
- `PopperMethods` (mixin): forwards useful methods such as `show` and `hide` to the underlying `<Popper>` component
- `ThemeClass` (mixin): computes the final root CSS classes depending on themes

## Popper

The `<Popper>` component should receive all attributes and event listeners (don't forget to set `inheritAttrs` to `true`).

It also expects the following props:

- `theme`: currently applied theme
- `targetNode`: a function that returns the target HTML element that should trigger the popper
- `popperNode`: a function that returns the popper HTML element that will be displayed inside the popper (recommended to target the `<PopperContent>` root element)
- `arrowNode`: a function that returns the arrow HTML element that will represent the popper arrow (recommended to use the `<PopperContent>` arrow ref: `$refs.arrow`)

It exposes the following to the default slot:

- `popperId`: a unique ID for the popper, usefull for accessibility (should be passed to `<PopperContent>`)
- `isOpen`: boolean to know if the popper is open or not (should be passed to `<PopperContent>`)
- `trigger`: the trigger events
- `autoHide`: if auto hidding is enabled (should be passed to `<PopperContent>`)
- `hide`: method to hide the popper (should be handled with `<PopperContent>`'s `hide` event)
- `handleResize`: is resizing detection enabled (should be passed to `<PopperContent>`)
- `onResize`: method to handle a change of the size of the popper content (should be handled with `<PopperContent>`'s `resize` event)

## PopperContent

It expects the following props:

- `popperId`
- `theme`
- `isOpen`
- `autoHide`
- `handleResize`

Events:

- `hide`
- `resize`

Refs:

- `$refs.arrow` (arrow element)
- `$refs.inner` (div where most styling of the popper should be applied)

## Full example

```vue
<template>
  <Popper
    ref="popper"
    v-slot="{
      popperId,
      isOpen,
      trigger,
      autoHide,
      hide,
      handleResize,
      onResize,
    }"
    v-bind="$attrs"
    :theme="theme"
    :target-node="() => $refs.trigger"
    :popper-node="() => $refs.popperContent.$el"
    :arrow-node="() => $refs.popperContent.$refs.arrow"
    v-on="$listeners"
  >
    <div
      class="v-popper"
      :class="[
        themeClass,
        {
          'v-popper--open': isOpen,
        },
      ]"
    >
      <div
        ref="trigger"
        :aria-describedby="popperId"
        :tabindex="trigger.indexOf('focus') !== -1 ? 0 : undefined"
        class="v-popper__trigger"
        style="display: inline-block;"
      >
        <slot />
      </div>

      <PopperContent
        ref="popperContent"
        :popper-id="popperId"
        :theme="theme"
        :is-open="isOpen"
        :auto-hide="autoHide"
        :handle-resize="handleResize"
        @hide="hide"
        @resize="onResize"
      >
        <slot name="popper" />
      </PopperContent>
    </div>
  </Popper>
</template>

<script>
import {
  Popper,
  PopperContent,
  PopperMethods,
  ThemeClass
} from 'v-tooltip'

export default {
  name: 'MyPopper',

  components: {
    Popper,
    PopperContent,
  },

  mixins: [
    PopperMethods,
    ThemeClass,
  ],

  inheritAttrs: false,

  props: {
    theme: {
      type: String,
      default () {
        return this.$options.vPopperTheme
      },
    },
  },
}
</script>
```
