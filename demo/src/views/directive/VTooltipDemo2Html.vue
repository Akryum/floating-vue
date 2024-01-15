<template>
  <h1>VTooltip html content</h1>

  <div>
    <button
      v-tooltip="{
        content: '<b>Hey</b>, how are <i>you</i>?',
        html: true,
      }"
    >
      Hover me
    </button>
  </div>
</template>
