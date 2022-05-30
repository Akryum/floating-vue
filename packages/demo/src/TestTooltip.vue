<template>
  <div class="meow">
    <button
      v-tooltip="{
        content: 'Tooltip',
        triggers: ['hover'],
        popperTriggers: ['hover'],
      }"
    >Meow</button>
  </div>
</template>

<style scoped>
.meow {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
