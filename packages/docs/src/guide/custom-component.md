
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
- `targetNodes`: a function that returns the target HTML elements that should trigger the popper
- `referenceNode`: a function that returns the reference HTML element that should be used as the Popper JS reference for positionning
- `popperNode`: a function that returns the popper HTML element that will be displayed inside the popper (recommended to target the `<PopperContent>` root element)

It exposes the following to the default slot:

- `popperId`: a unique ID for the popper, usefull for accessibility (should be passed to `<PopperContent>`)
- `isShown`: boolean to know if the popper is open or not (should be passed to `<PopperContent>`)
- `shouldMountContent`: boolean to know if the popper content should be mounted or not (should be passed to `<PopperContent>`)
- `skipTransition`: boolean to disable animations and transitions (should be passed to `<PopperContent>`)
- `autoHide`: if auto hidding is enabled (should be passed to `<PopperContent>`)
- `hide`: method to hide the popper (should be handled with `<PopperContent>`'s `hide` event)
- `handleResize`: is resizing detection enabled (should be passed to `<PopperContent>`)
- `onResize`: method to handle a change of the size of the popper content (should be handled with `<PopperContent>`'s `resize` event)
- `classes`: object with boolean flags to toggle CSS classes (should be passed to `<PopperContent>`)
- `result`: object with positioning data computed for the popper (should be passed to `<PopperContent>`)

## PopperContent

It expects the following props:

- `popperId`
- `theme`
- `shown`
- `mounted`
- `skipTransition`
- `autoHide`
- `handleResize`
- `classes`
- `result`

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
      isShown,
      shouldMountContent,
      skipTransition,
      autoHide,
      hide,
      handleResize,
      onResize,
      classes,
      result,
    }"
    v-bind="$attrs"
    :theme="theme"
    :target-nodes="getTargetNodes"
    :reference-node="() => $refs.reference"
    :popper-node="() => $refs.popperContent.$el"
    v-on="$listeners"
  >
    <div
      ref="reference"
      class="v-popper"
      :class="[
        themeClass,
        {
          'v-popper--shown': isShown,
        },
      ]"
    >
      <slot />

      <PopperContent
        ref="popperContent"
        :popper-id="popperId"
        :theme="theme"
        :shown="isShown"
        :mounted="shouldMountContent"
        :skip-transition="skipTransition"
        :auto-hide="autoHide"
        :handle-resize="handleResize"
        :classes="classes"
        :result="result"
        @hide="hide"
        @resize="onResize"
      >
        <slot
          name="popper"
          :shown="isShown"
        />
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
} from 'floating-vue'

export default {
  name: 'VPopperWrapper',

  components: {
    Popper: Popper(),
    PopperContent,
  },

  mixins: [
    PopperMethods,
    ThemeClass(),
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

  methods: {
    getTargetNodes () {
      return Array.from(this.$refs.reference.children)
    },
  },
}
</script>
```
