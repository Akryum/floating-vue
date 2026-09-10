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
      result,
      arrowSize,
    }"
    v-bind="$attrs"
    :preset="finalPreset"
    :target-nodes="targetNodes"
    :popper-node="getPopperNode"
    @apply-show="onShow"
    @apply-hide="onHide"
  >
    <PopperContent
      ref="popperContent"
      :class="{
        'v-popper--tooltip-loading': loading,
      }"
      :popper-id="popperId"
      :preset="finalPreset"
      :shown="isShown"
      :mounted="shouldMountContent"
      :skip-transition="skipTransition"
      :auto-hide="autoHide"
      :handle-resize="handleResize"
      :classes="classes"
      :result="result"
      :aria-role="tooltipAriaRole"
      :arrow-size="arrowSize"
      @hide="hide"
      @resize="onResize"
    >
      <div
        v-if="html"
        v-html="finalContent"
      />
      <div
        v-else
        v-text="finalContent"
      />
    </PopperContent>
  </Popper>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, nextTick, ref, watch, type ComponentPublicInstance, type PropType } from 'vue'
import Popper from './Popper'
import PopperContent from './PopperContent.vue'
import { getDefaultConfig } from '../config'
import { usePopperMethods } from '../composable/usePopperMethods'
import { deprecatedThemeProp, type PresetPropsLike, resolvePresetName } from '../util/preset'

defineOptions({
  name: 'VTooltipDirective',
  inheritAttrs: false,
})

const props = defineProps({
  preset: {
    type: String,
    // Keep this neutral so a reactive `theme` compatibility alias is not
    // captured as a mount-time prop default.
    default: null,
  },

  /**
   * @deprecated Use `preset` instead.
   */
  theme: deprecatedThemeProp,

  html: {
    type: Boolean,
    default: (props: PresetPropsLike) => getDefaultConfig(resolvePresetName(props, 'tooltip'), 'html'),
  },

  content: {
    type: [String, Number, Function],
    default: null,
  },

  loadingContent: {
    type: String,
    default: (props: PresetPropsLike) => getDefaultConfig(resolvePresetName(props, 'tooltip'), 'loadingContent'),
  },

  targetNodes: {
    type: Function as PropType<() => Element[]>,
    required: true,
  },
})

const instance = getCurrentInstance()
const popper = ref(null)
const popperContent = ref<ComponentPublicInstance | null>(null)
const asyncContent = ref<string | number | null>(null)
const isPopperShown = ref(false)
const methods = usePopperMethods(popper)
let fetchId = 0
let fetchLoading = false

const finalPreset = computed(() => props.preset ?? props.theme ?? 'tooltip')
const tooltipAriaRole = computed(() => getDefaultConfig(finalPreset.value, 'ariaRole') ?? null)
const isContentAsync = computed(() => typeof props.content === 'function')
const loading = computed(() => isContentAsync.value && asyncContent.value == null)
const finalContent = computed(() => {
  if (isContentAsync.value) {
    return loading.value ? props.loadingContent : asyncContent.value
  }
  return props.content
})

/**
 * Fetches async tooltip content when visible.
 */
function fetchContent (force = false) {
  if (typeof props.content === 'function' && isPopperShown.value && (force || (!fetchLoading && asyncContent.value == null))) {
    asyncContent.value = null
    fetchLoading = true
    const currentFetchId = ++fetchId
    const result = props.content(instance?.proxy)
    if (result && typeof (result as { then?: unknown }).then === 'function') {
      (result as Promise<string | number>).then((res: string | number) => onResult(currentFetchId, res))
    } else {
      onResult(currentFetchId, result as string | number)
    }
  }
}

/**
 * Applies async content only if it belongs to the latest request.
 */
function onResult (currentFetchId: number, result: string | number) {
  if (currentFetchId !== fetchId) return
  fetchLoading = false
  asyncContent.value = result
}

/**
 * Handles core popper show completion.
 */
function onShow () {
  isPopperShown.value = true
  fetchContent()
}

/**
 * Handles core popper hide completion.
 */
function onHide () {
  isPopperShown.value = false
}

/**
 * Returns the popper content root element.
 */
function getPopperNode () {
  return popperContent.value?.$el
}

watch(() => props.content, () => fetchContent(true), { immediate: true })
watch(finalContent, async () => {
  await nextTick()
  await methods.onResize()
})

defineExpose(methods)
</script>
