<script setup>
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <h1>VTooltip input model</h1>

  <input v-model="text" />

  <div>
    <button v-tooltip="text">
      Hover me
    </button>
  </div>
</template>
