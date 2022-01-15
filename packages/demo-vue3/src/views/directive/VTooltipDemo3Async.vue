<script setup>
function load () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('I was loaded from a server...')
    }, 1000)
  })
}

const loadingContent = '<span style="opacity:.5;">Loading... Please wait</span>'
</script>

<template>
  <h1>VTooltip async content</h1>

  <div>
    <button
      v-tooltip="{
        content: load,
        loadingContent,
        html: true
      }"
    >
      Hover me
    </button>
  </div>
</template>
