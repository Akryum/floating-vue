<template>
  <div class="example flex flex-col space-y-12 items-center pt-12">
    <button
      v-tooltip="{
        content: placement,
        placement,
        triggers: [],
        shown: true,
        preventOverflow: false,
        arrowPadding: 8,
      }"
      class="border border-gray-300 rounded px-4 py-3 text-xl"
    >
      🐈️
    </button>

    <select
      v-model="placement"
      class="bg-gray-300/25 rounded px-4 py-2"
    >
      <option
        v-for="p of placements"
        :key="p"
        :value="p"
      >
        {{ p }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const placement = ref('auto')
const placements = computed(() => {
  const primary = ['auto', 'top', 'right', 'bottom', 'left']
  const secondary = ['', '-start', '-end']
  const list = []
  for (const p of primary) {
    for (const s of secondary) {
      list.push(`${p}${s}`)
    }
  }
  return list
})
</script>
