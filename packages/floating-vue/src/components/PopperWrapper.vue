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
      arrowSize,
    }"
    v-bind="$props"
    :preset="finalPreset"
    :popper-node="getPopperNode"
    :class="[
      presetClass,
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
      :preset="finalPreset"
      :shown="isShown"
      :mounted="shouldMountContent"
      :skip-transition="skipTransition"
      :auto-hide="autoHide"
      :handle-resize="handleResize"
      :classes="classes"
      :result="result"
      :aria-role="ariaRole"
      :arrow-size="arrowSize"
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
import { popperEmits } from '../composable/popper/emits'
import { usePopperMethods } from '../composable/usePopperMethods'
import { usePresetClass } from '../composable/usePresetClass'

defineOptions({
  name: 'VPopperWrapper',
})

const props = defineProps(popperWrapperProps)

const emit = defineEmits(popperEmits)

const instance = getCurrentInstance()
const popper = ref(null)
const popperContent = ref<ComponentPublicInstance | null>(null)
// `vPopperTheme` is the deprecated spelling of the preset baked into a wrapper
// component definition. The final fallback matches Popper and PopperContent, so
// a bare <PopperWrapper> gets consistent classes instead of `preset-undefined`.
const componentPreset = instance?.type as { vPopperPreset?: string, vPopperTheme?: string } | undefined
const finalPreset = computed(() => props.preset ?? componentPreset?.vPopperPreset ?? componentPreset?.vPopperTheme ?? 'dropdown')
const presetClass = usePresetClass(finalPreset)
const methods = usePopperMethods(popper)

/**
 * Returns the popper content root element.
 */
function getPopperNode () {
  return popperContent.value?.$el
}

defineExpose(methods)
</script>
