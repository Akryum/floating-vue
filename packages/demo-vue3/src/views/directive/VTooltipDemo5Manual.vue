<script setup>
import { ref } from 'vue'
const shown = ref(true)
</script>

<template>
  <h1>VTooltip manual</h1>

  <label>
    <input type="checkbox" v-model="shown" />
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
    >
      Reference
    </button>
  </div>
</template>
