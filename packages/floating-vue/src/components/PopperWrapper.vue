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
    :theme="finalTheme"
    :target-nodes="getTargetNodes"
    :popper-node="() => $refs.popperContent.$el"
    :class="[
      themeClass,
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
      :theme="finalTheme"
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
  </Popper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Popper from './Popper.vue'
import PopperContent from './PopperContent.vue'
import PopperMethods from './PopperMethods'
import ThemeClass from './ThemeClass'

export default defineComponent({
  name: 'VPopperWrapper',

  components: {
    Popper,
    PopperContent,
  },

  mixins: [
    PopperMethods,
    ThemeClass('finalTheme'),
  ],

  props: {
    theme: {
      type: String,
      default: null,
    },
  },

  computed: {
    finalTheme (): string {
      return this.theme ?? this.$options.vPopperTheme
    },
  },

  methods: {
    getTargetNodes () {
      return Array.from(this.$el.children)
        .filter(node => node !== this.$refs.popperContent.$el)
    },
  },
})
</script>
