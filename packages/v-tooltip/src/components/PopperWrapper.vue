<template>
  <Popper
    ref="popper"
    v-slot="{
      popperId,
      isOpen,
      isMounted,
      skipTransition,
      autoHide,
      hide,
      handleResize,
      onResize,
    }"
    v-bind="$attrs"
    :theme="theme"
    :target-node="getTargetNode"
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
      <slot />

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
        <slot
          name="popper"
          :is-open="isOpen"
        />
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
  },

  methods: {
    getTargetNode () {
      return this.$slots.default[0].elm
    },
  },
}
</script>
