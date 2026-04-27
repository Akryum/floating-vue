<script setup>
import { computed, onMounted, ref } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  modelValue: {
    default: null,
  },
  autoFocus: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])
const input = ref(null)
const valueModel = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

onMounted(() => {
  if (props.autoFocus) {
    input.value.focus()
  }
})
</script>

<template>
  <input
    ref="input"
    v-model="valueModel"
    v-bind="$attrs"
    class="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 w-full"
  >
</template>
