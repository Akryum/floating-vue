<template>
  <div
    :id="popperId"
    ref="popover"
    class="v-popper__popper"
    :class="[
      presetClass,
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
    :style="popperStyle"
    :role="ariaRole ?? undefined"
    :aria-modal="ariaRole === 'dialog' && shown ? 'true' : undefined"
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
import { computed, ref } from 'vue'
import { useResizeObserver } from '../composable/useResizeObserver'
import { usePresetClass } from '../composable/usePresetClass'
import { resolvePresetName } from '../util/preset'
import type { PopperClasses, PopperResult } from '../composable/popper/types'
import type { PopperStyleClass } from '../types/popper-style'

const props = withDefaults(defineProps<{
  popperId?: string
  preset?: string
  /**
   * @deprecated Use `preset` instead.
   */
  theme?: string
  shown: boolean
  mounted: boolean
  skipTransition: boolean
  autoHide: boolean
  handleResize: boolean
  classes: PopperClasses & { popperClass?: PopperStyleClass }
  result: PopperResult | null
  ariaRole?: string | null
  arrowSize?: number | string | null
}>(), {
  autoHide: false,
  handleResize: false,
  mounted: false,
  shown: false,
  skipTransition: false,
  ariaRole: null,
  arrowSize: null,
  // `preset` and `theme` deliberately get no default here — see `deprecatedThemeProp`.
})

const emit = defineEmits<{
  (event: 'hide'): void
  (event: 'resize', value?: unknown): void
}>()

/**
 * CSS variables derived from the arrow container size.
 */
const ARROW_SIZE_RATIOS = [
  ['--v-popper-arrow-inner-size', 0.7],
  ['--v-popper-arrow-outer-size', 0.6],
  ['--v-popper-arrow-inner-horizontal-offset', -0.2],
  ['--v-popper-arrow-outer-horizontal-offset', -0.1],
  ['--v-popper-arrow-inner-top-offset', -0.2],
  ['--v-popper-arrow-inner-bottom-offset', -0.4],
  ['--v-popper-arrow-outer-bottom-offset', -0.6],
  ['--v-popper-arrow-inner-vertical-offset', -0.2],
  ['--v-popper-arrow-outer-vertical-offset', -0.1],
  ['--v-popper-arrow-inner-right-offset', -0.4],
  ['--v-popper-arrow-outer-right-offset', -0.6],
  ['--v-popper-arrow-container-left-offset', -1],
  ['--v-popper-arrow-inner-left-offset', -0.2],
] as const

/**
 * Matches simple CSS lengths so their numeric part can be scaled without calc().
 */
const CSS_LENGTH_RE = /^(-?(?:\d+|\d*\.\d+)(?:e[+-]?\d+)?)([a-z%]+)$/i

const presetClass = usePresetClass(computed(() => resolvePresetName(props, 'dropdown')))

const inner = ref<HTMLElement | null>(null)
const popperStyle = computed(() => {
  const style: Record<string, string> = {
    ...getArrowSizeVars(props.arrowSize),
  }

  if (props.result) {
    style.position = props.result.strategy
    style.transform = `translate3d(${Math.round(props.result.x)}px,${Math.round(props.result.y)}px,0)`
  }

  return Object.keys(style).length ? style : undefined
})

useResizeObserver(
  inner,
  () => emit('resize'),
  () => props.mounted && props.handleResize,
)

/**
 * Converts a numeric pixel value to a CSS length, returning '' to clear the property.
 */
function toPx (value: unknown): string {
  if (value != null && !isNaN(Number(value))) {
    return `${value}px`
  }
  return ''
}

/**
 * Converts numeric values to pixels while preserving authored CSS lengths.
 */
function normalizeCssLength (value: number | string | null | undefined): string | undefined {
  if (value == null) return undefined

  const normalizedValue = typeof value === 'string' ? value.trim() : value
  if (normalizedValue === '') return undefined

  if (!isNaN(Number(normalizedValue))) {
    return formatPx(Number(normalizedValue))
  }

  return String(normalizedValue)
}

/**
 * Builds arrow custom properties from an optional high-level arrow size.
 */
function getArrowSizeVars (value: number | string | null | undefined): Record<string, string> {
  const arrowSize = normalizeCssLength(value)
  if (!arrowSize) return {}

  const style: Record<string, string> = {
    '--v-popper-arrow-size': arrowSize,
  }

  for (const [name, ratio] of ARROW_SIZE_RATIOS) {
    style[name] = scaleCssLength(arrowSize, ratio)
  }

  return style
}

/**
 * Scales CSS lengths while preserving authored units and CSS variables.
 */
function scaleCssLength (value: string, ratio: number): string {
  const match = value.match(CSS_LENGTH_RE)

  if (match) {
    return `${formatNumber(Number(match[1]) * ratio)}${match[2]}`
  }

  return `calc(${value} * ${formatNumber(ratio)})`
}

/**
 * Formats a pixel number without trailing decimal noise.
 */
function formatPx (value: number): string {
  return `${formatNumber(value)}px`
}

/**
 * Formats a number without trailing decimal noise.
 */
function formatNumber (value: number): string {
  return `${Number.parseFloat(value.toFixed(4))}`
}
</script>
