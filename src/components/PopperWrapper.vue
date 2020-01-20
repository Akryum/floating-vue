<template>
  <Popper
    ref="popper"
    v-slot="{
      popperId,
      isOpen,
      isMounted,
      skipTransition,
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
        :title="title"
        :aria-describedby="popperId"
        :tabindex="trigger.indexOf('focus') !== -1 ? 0 : undefined"
        class="v-popper__trigger"
      >
        <slot />
      </div>

      <PopperContent
        ref="popperContent"
        :popper-id="popperId"
        :theme="theme"
        :is-open="isOpen"
        :is-mounted="isMounted"
        :skip-transition="skipTransition"
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
import Popper from './Popper.vue'
import PopperContent from './PopperContent.vue'
import PopperMethods from './PopperMethods'
import ThemeClass from './ThemeClass'

export default {
  name: 'VPopperWrapper',

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

    title: String,
  },
}
</script>
