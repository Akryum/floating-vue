<script lang="ts" setup>
export interface Tab {
  id: string
  label: string
  icon?: string
}

defineProps<{
  modelValue: string
  tabs: Tab[]
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="flex-none flex dark:text-gray-200">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      class="px-3 py-2 relative hover:bg-emerald-100 dark:hover:bg-emerald-900 flex items-center"
      :class="{
        'text-emerald-500 font-medium': modelValue === tab.id,
      }"
      @click="$emit('update:modelValue', tab.id)"
    >
      <component
        :is="tab.icon"
        v-if="tab.icon"
        class="w-4 h-4 mr-2"
      />

      <slot :tab="tab">
        {{ tab.label }}
      </slot>

      <div
        v-if="modelValue === tab.id"
        class="absolute bottom-0 left-0 w-full border-b-2 border-emerald-500"
      />
    </button>
  </div>
</template>
