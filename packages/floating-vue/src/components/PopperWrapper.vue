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
      attrs,
    }"
    v-bind="popperAttrs"
    :theme="finalTheme"
    :target-nodes="getTargetNodes"
    :reference-node="() => $refs.reference"
    :popper-node="() => $refs.popperContent.$el"
  >
    <div
      ref="reference"
      class="v-popper"
      v-bind="attrs"
      :class="[
        $attrs.class,
        themeClass,
        {
          'v-popper--shown': isShown,
        },
      ]"
      :style="$attrs.style"
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
    </div>
  </Popper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Popper from './Popper'
import PopperContent from './PopperContent.vue'
import PopperMethods from './PopperMethods'
import ThemeClass from './ThemeClass'

export default defineComponent({
  name: 'VPopperWrapper',

  components: {
    Popper: Popper(),
    PopperContent,
  },

  mixins: [
    PopperMethods,
    ThemeClass('finalTheme'),
  ],

  inheritAttrs: false,

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

    popperAttrs (): Record<string, any> {
      const result = { ...this.$attrs }
      delete result.class
      delete result.style
      return result
    },
  },

  methods: {
    getTargetNodes () {
      return Array.from(this.$refs.reference.children)
        .filter(node => node !== this.$refs.popperContent.$el)
    },
  },
})
</script>
