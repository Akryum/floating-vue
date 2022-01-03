<script setup>
import { ref } from 'vue'

const shown = ref(false)
</script>

<template>
  <h1>Manual Dropdown</h1>

  <div>
    <label>
      <input v-model="shown" type="checkbox">
      Show dropdown
    </label>
  </div>

  <VDropdown
    v-model:shown="shown"
    :triggers="[]"
    :auto-hide="false"
    :style="{
      marginLeft: '400px',
    }"
  >
    <button id="dropdown-btn">Click me</button>

    <template #popper>
      <div class="my-menu">
        Manual dropdown
      </div>
    </template>
  </VDropdown>
</template>

<style lang="postcss" scoped>
.my-menu {
  padding: 20px;
}
</style>
