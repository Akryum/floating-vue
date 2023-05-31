<script>
export default {
  props: [
    'value',
    'tabs',
  ],
}
</script>

<template>
  <div class="flex-none flex">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      class="px-3 py-2 relative hover:bg-green-100 flex items-center"
      :class="{
        'text-green-500 font-medium': value === tab.id,
      }"
      @click="$emit('input', tab.id)"
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
        v-if="value === tab.id"
        class="absolute bottom-0 left-0 w-full border-b-2 border-green-500"
      />
    </button>
  </div>
</template>
