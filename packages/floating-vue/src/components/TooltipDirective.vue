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
    }"
    v-bind="$attrs"
    :theme="theme"
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

defineOptions({
  name: 'VTooltipDirective',
  inheritAttrs: false,
})

const props = defineProps({
  theme: {
    type: String,
    default: 'tooltip',
  },

  html: {
    type: Boolean,
    default: props => getDefaultConfig(props.theme, 'html'),
  },

  content: {
    type: [String, Number, Function],
    default: null,
  },

  loadingContent: {
    type: String,
    default: props => getDefaultConfig(props.theme, 'loadingContent'),
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
    if (result?.then) {
      result.then(res => onResult(currentFetchId, res))
    } else {
      onResult(currentFetchId, result)
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
