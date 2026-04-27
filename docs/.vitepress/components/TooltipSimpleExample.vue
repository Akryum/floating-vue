<template>
  <div class="example flex justify-center py-12">
    <button
      v-tooltip="'You have ' + count + ' new messages.'"
      class="border border-gray-300 rounded px-4 py-2"
    >
      Mouse over me
    </button>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const count = ref(0)
let timer

onMounted(() => {
  timer = setInterval(() => {
    count.value++
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>
