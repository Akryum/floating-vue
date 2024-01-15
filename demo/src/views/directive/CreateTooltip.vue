<script setup>
import { createTooltip, destroyTooltip } from 'floating-vue'

function clipboardSuccess (el) {
  el.classList.add('copied')
  const tooltip = createTooltip(el, {
    triggers: [],
    content: 'Copied!',
    delay: 0,
  })
  tooltip.show()
  setTimeout(() => {
    el.classList.remove('copied')
    tooltip.hide()
    // Transition
    setTimeout(() => {
      destroyTooltip(el)
    }, 400)
  }, 600)
}
</script>

<template>
  <div>
    <button
      class="px-4 py-2 bg-green-100 rounded"
      @click="clipboardSuccess($event.currentTarget)"
    >
      Copy
    </button>
  </div>
</template>
