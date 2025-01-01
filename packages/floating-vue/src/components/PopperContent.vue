<template>
  <div
    :id="popperId"
    ref="popover"
    class="v-popper__popper"
    :class="[
      themeClass,
      classes.popperClass,
      {
        'v-popper__popper--shown': shown,
        'v-popper__popper--hidden': !shown,
        'v-popper__popper--show-from': classes.showFrom,
        'v-popper__popper--show-to': classes.showTo,
        'v-popper__popper--hide-from': classes.hideFrom,
        'v-popper__popper--hide-to': classes.hideTo,
        'v-popper__popper--skip-transition': skipTransition,
        'v-popper__popper--arrow-overflow': result && result.arrow.overflow,
        'v-popper__popper--no-positioning': !result,
      },
    ]"
    :style="result ? {
      position: result.strategy,
      transform: `translate3d(${Math.round(result.x)}px,${Math.round(result.y)}px,0)`,
    } : undefined"
    :aria-hidden="shown || autoHide ? 'false' : 'true'"
    :tabindex="autoHide ? 0 : undefined"
    :data-popper-placement="result ? result.placement : undefined"
    @keyup.esc="autoHide && $emit('hide')"
  >
    <div
      class="v-popper__backdrop"
      @click="autoHide && $emit('hide')"
    />
    <div
      class="v-popper__wrapper"
      :style="result ? {
        transformOrigin: result.transformOrigin,
      } : undefined"
    >
      <div
        ref="inner"
        class="v-popper__inner"
      >
        <template v-if="mounted">
          <div>
            <slot />
          </div>

          <ResizeObserver
            v-if="handleResize"
            @notify="$emit('resize', $event)"
          />
        </template>
      </div>

      <div
        ref="arrow"
        class="v-popper__arrow-container"
        :style="result ? {
          left: toPx(result.arrow.x),
          top: toPx(result.arrow.y),
        } : undefined"
      >
        <div class="v-popper__arrow-outer" />
        <div class="v-popper__arrow-inner" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ResizeObserver } from 'vue-resize'
import ThemeClass from './ThemeClass'

export default defineComponent({
  name: 'VPopperContent',

  components: {
    ResizeObserver,
  },

  mixins: [
    ThemeClass(),
  ],

  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object,
  },

  emits: [
    'hide',
    'resize',
  ],

  methods: {
    toPx (value) {
      if (value != null && !isNaN(value)) {
        return `${value}px`
      }
      return null
    },
  },
})
</script>
