
# Custom popper component

::: warning
This is an advanced API! You are advised to get familiar with the library before trying this.
:::

You can create an entirely custom component to use as a popper. floating-vue exposes the following building blocks:

- `Popper` (component): main logic component and integration with Floating UI
- `PopperContent` (component): standard minimal popper content with all the needed containers and CSS classes
- `usePopperMethods` (composable): forwards useful methods such as `show` and `hide` to the underlying `<Popper>` component
- `usePresetClass` (composable): computes the final root CSS classes depending on the [preset](./presets.md)
- `usePopper` (composable): the logic behind `<Popper>` itself, if you also want to replace that component — see the [API reference](../api/#usepopper)

::: tip
If you only need different default options and styles, prefer a [preset component](./presets.md#preset-component) — it's a lot less code.
:::

## Popper

The `<Popper>` component should receive all attributes and event listeners (don't forget to set `inheritAttrs` to `true`).

It also expects the following props:

- `preset`: name of the currently applied [preset](./presets.md)
- `targetNodes`: a function that returns the target HTML elements that should trigger the popper
- `referenceNode`: a function that returns the reference HTML element that should be used as the Floating UI reference for positioning
- `popperNode`: a function that returns the popper HTML element that will be displayed inside the popper (recommended to target the `<PopperContent>` root element)

It exposes the following to the default slot (see the `PopperSlotData` type):

- `popperId`: a unique ID for the popper, useful for accessibility (should be passed to `<PopperContent>`)
- `isShown`: boolean to know if the popper is open or not (should be passed to `<PopperContent>`)
- `shouldMountContent`: boolean to know if the popper content should be mounted or not (should be passed to `<PopperContent>`)
- `skipTransition`: boolean to disable animations and transitions (should be passed to `<PopperContent>`)
- `autoHide`: if auto hiding is enabled (should be passed to `<PopperContent>`)
- `show`: method to show the popper
- `hide`: method to hide the popper (should be handled with `<PopperContent>`'s `hide` event)
- `handleResize`: is resizing detection enabled (should be passed to `<PopperContent>`)
- `onResize`: method to handle a change of the size of the popper content (should be handled with `<PopperContent>`'s `resize` event)
- `classes`: object with boolean flags to toggle CSS classes (should be passed to `<PopperContent>`)
- `result`: object with positioning data computed for the popper (should be passed to `<PopperContent>`)
- `attrs`: the non-prop attributes forwarded to the popper
- `ariaRole`: the ARIA role to apply to the popper element (should be passed to `<PopperContent>`)
- `arrowSize`: the resolved arrow size (should be passed to `<PopperContent>`)

## PopperContent

It expects the following props:

- `popperId`
- `preset`
- `shown`
- `mounted`
- `skipTransition`
- `autoHide`
- `handleResize`
- `classes`
- `result`
- `ariaRole`
- `arrowSize`

Events:

- `hide`
- `resize`

## Full example

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Popper,
  PopperContent,
  usePopperMethods,
  usePresetClass,
} from 'floating-vue'

const props = withDefaults(defineProps<{
  preset?: string
}>(), {
  preset: 'dropdown',
})

const popper = ref(null)
const popperContent = ref(null)
const reference = ref<HTMLElement | null>(null)
const preset = computed(() => props.preset)
const presetClass = usePresetClass(preset)
const { show, hide, dispose, onResize } = usePopperMethods(popper)

defineExpose({
  show,
  hide,
  dispose,
  onResize,
})

function getTargetNodes () {
  return Array.from(reference.value!.children)
}
</script>

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
      ariaRole,
      arrowSize,
    }"
    v-bind="$attrs"
    :preset="preset"
    :target-nodes="getTargetNodes"
    :reference-node="() => reference"
    :popper-node="() => popperContent.$el"
  >
    <div
      ref="reference"
      class="v-popper"
      :class="[
        presetClass,
        {
          'v-popper--shown': isShown,
        },
      ]"
    >
      <slot />

      <PopperContent
        ref="popperContent"
        :popper-id="popperId"
        :preset="preset"
        :shown="isShown"
        :mounted="shouldMountContent"
        :skip-transition="skipTransition"
        :auto-hide="autoHide"
        :handle-resize="handleResize"
        :classes="classes"
        :result="result"
        :aria-role="ariaRole"
        :arrow-size="arrowSize"
        @hide="hide"
        @resize="onResize"
      >
        <slot
          name="popper"
          :shown="isShown"
          :hide="hide"
        />
      </PopperContent>
    </div>
  </Popper>
</template>
```
