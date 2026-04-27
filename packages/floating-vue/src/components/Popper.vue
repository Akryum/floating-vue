<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue'
import PopperCore from './Popper'
import { usePopperMethods } from '../composable/usePopperMethods'

defineOptions({
  name: 'VPopperReference',
  inheritAttrs: false,
})

const attrs = useAttrs()
const popper = ref(null)
const reference = ref<HTMLElement | null>(null)
const methods = usePopperMethods(popper)
const coreAttrs = computed(() => {
  const rest = { ...attrs }
  delete rest.class
  delete rest.style
  return rest
})

/**
 * Returns target nodes rendered inside the reference wrapper.
 */
function getTargetNodes () {
  return Array.from(reference.value?.children ?? [])
    .filter(node => !(node as Element).classList.contains('v-popper__popper'))
}

/**
 * Returns the wrapper used as Floating UI reference.
 */
function getReferenceNode () {
  return reference.value
}

/**
 * Returns the popper content root rendered by the slot.
 */
function getPopperNode () {
  return reference.value?.querySelector('.v-popper__popper') as HTMLElement
}

defineExpose(methods)
</script>

<template>
  <PopperCore
    ref="popper"
    v-slot="slotData"
    v-bind="coreAttrs"
    :target-nodes="getTargetNodes"
    :reference-node="getReferenceNode"
    :popper-node="getPopperNode"
  >
    <div
      ref="reference"
      class="v-popper"
      :class="[
        attrs.class,
        {
          'v-popper--shown': slotData.isShown,
        },
      ]"
      :style="attrs.style"
    >
      <slot
        v-bind="slotData"
      />
    </div>
  </PopperCore>
</template>
