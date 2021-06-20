<template>
  <h1>VTooltip html content</h1>

  <label>
    <input type="checkbox" v-model="shown" />
    Show tooltip
  </label>

  <div>
    <button
      v-tooltip="{
        shown: shown,
        content: '<b>Hey</b>, how are <i>you</i>?',
        html: true,
        placement: 'bottom',
        triggers: [],
      }"
    >
      Hover me
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const shown = ref(true)
</script>
