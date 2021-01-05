
# Custom popper component

TODO

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
