<template>
  <Popper
    ref="popper"
    v-slot="{
      popperId,
      isShown,
      shouldMountContent,
      skipTransition,
      autoHide,
      show,
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
      <slot
        :shown="isShown"
        :show="show"
        :hide="hide"
      />

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
          :hide="hide"
        />
      </PopperContent>
    </div>
  </Popper>
</template>

<script lang="ts">
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
      default () {
        return this.$options.vPopperTheme
      },
    },
  },

  methods: {
    getTargetNodes () {
      return Array.from(this.$refs.reference.children)
        .filter(node => node !== this.$refs.popperContent.$el)
    },
  },
}
</script>
