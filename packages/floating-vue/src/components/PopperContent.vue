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
    :aria-hidden="shown ? 'false' : 'true'"
    :tabindex="autoHide ? 0 : undefined"
    :data-popper-placement="result ? result.placement : undefined"
    @keyup.esc="autoHide && emit('hide')"
  >
    <div
      class="v-popper__backdrop"
      @click="autoHide && emit('hide')"
    />
    <div
      class="v-popper__wrapper"
      :style="result ? {
        transformOrigin: result.transformOrigin ?? undefined,
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
            @notify="emit('resize', $event)"
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

<script setup lang="ts">
import { toRef } from 'vue'
import { ResizeObserver } from 'vue-resize'
import { useThemeClass } from '../composable/useThemeClass'
import type { PopperClasses, PopperResult } from '../composable/popper/types'

const props = withDefaults(defineProps<{
  popperId?: string
  theme: string
  shown: boolean
  mounted: boolean
  skipTransition: boolean
  autoHide: boolean
  handleResize: boolean
  classes: PopperClasses & { popperClass?: unknown }
  result: PopperResult | null
}>(), {
  autoHide: false,
  handleResize: false,
  mounted: false,
  shown: false,
  skipTransition: false,
})

const emit = defineEmits<{
  (event: 'hide'): void
  (event: 'resize', value?: unknown): void
}>()

const themeClass = useThemeClass(toRef(props, 'theme'))

/**
 * Converts a numeric pixel value to a CSS length, returning '' to clear the property.
 */
function toPx (value: unknown): string {
  if (value != null && !isNaN(Number(value))) {
    return `${value}px`
  }
  return ''
}
</script>
