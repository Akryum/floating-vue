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
    }"
    v-bind="$attrs"
    :theme="finalTheme"
    :target-nodes="getTargetNodes"
    :reference-node="() => $refs.reference"
    :popper-node="() => $refs.popperContent.$el"
    :arrow-node="() => $refs.popperContent.$refs.arrow"
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
        :theme="finalTheme"
        :shown="isShown"
        :mounted="shouldMountContent"
        :skip-transition="skipTransition"
        :auto-hide="autoHide"
        :handle-resize="handleResize"
        :classes="classes"
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
import Popper from './Popper'
import PopperContent from './PopperContent.vue'
import PopperMethods from './PopperMethods'
import ThemeClass from './ThemeClass'

export default {
  name: 'VPopperWrapper',

  components: {
    Popper: Popper(),
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
      default: null,
    },
  },

  computed: {
    finalTheme () {
      return this.theme ?? this.$options.vPopperTheme
    },
  },

  methods: {
    getTargetNodes () {
      const children = [...this.$refs.reference.children]
      return children.slice(0, children.length - 1).filter(Boolean)
    },
  },
}
</script>

<style>
.v-popper {
  width: max-content;
}
</style>
