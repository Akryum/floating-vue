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
      ariaRole,
    }"
    v-bind="$props"
    :theme="finalTheme"
    :popper-node="getPopperNode"
    :class="[
      themeClass,
    ]"
    @show="emit('show')"
    @hide="emit('hide')"
    @update:shown="(shown: boolean) => emit('update:shown', shown)"
    @apply-show="emit('apply-show')"
    @apply-hide="emit('apply-hide')"
    @close-group="emit('close-group')"
    @close-directive="emit('close-directive')"
    @auto-hide="emit('auto-hide')"
    @resize="emit('resize')"
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
      :aria-role="ariaRole"
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

<script setup lang="ts">
import { computed, getCurrentInstance, ref, type ComponentPublicInstance } from 'vue'
import Popper from './Popper.vue'
import PopperContent from './PopperContent.vue'
import { popperWrapperProps } from './popperWrapperProps'
import { usePopperMethods } from '../composable/usePopperMethods'
import { useThemeClass } from '../composable/useThemeClass'

defineOptions({
  name: 'VPopperWrapper',
})

const props = defineProps(popperWrapperProps)

const emit = defineEmits({
  show: () => true,
  hide: () => true,
  'update:shown': (shown: boolean) => typeof shown === 'boolean',
  'apply-show': () => true,
  'apply-hide': () => true,
  'close-group': () => true,
  'close-directive': () => true,
  'auto-hide': () => true,
  resize: () => true,
})

const instance = getCurrentInstance()
const popper = ref(null)
const popperContent = ref<ComponentPublicInstance | null>(null)
const finalTheme = computed(() => props.theme ?? (instance?.type as { vPopperTheme?: string } | undefined)?.vPopperTheme)
const themeClass = useThemeClass(finalTheme)
const methods = usePopperMethods(popper)

/**
 * Returns the popper content root element.
 */
function getPopperNode () {
  return popperContent.value?.$el
}

defineExpose(methods)
</script>
