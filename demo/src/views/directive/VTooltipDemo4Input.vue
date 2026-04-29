<script setup>
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <h1>VTooltip input model</h1>

  <input v-model="text" data-test="tooltip-reactive-input" />

  <div>
    <button v-tooltip="text" data-test="tooltip-reactive-target">
      Hover me
    </button>
  </div>
</template>
