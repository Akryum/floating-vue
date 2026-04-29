<script setup>
import { ref } from 'vue'
const shown = ref(true)
</script>

<template>
  <h1>VTooltip manual</h1>

  <label>
    <input type="checkbox" v-model="shown" data-test="tooltip-manual-toggle" />
    Show tooltip
  </label>

  <div>
    <button
      v-tooltip="{
        shown,
        content: 'Manual trigger',
        placement: 'bottom',
        triggers: [],
      }"
      data-test="tooltip-manual-target"
    >
      Reference
    </button>
  </div>
</template>
