<script setup>
import { ref } from 'vue'

const shown = ref(false)
const placement = ref('bottom')
</script>

<template>
  <h1>Manual Dropdown</h1>

  <div>
    <label>
      <input v-model="shown" type="checkbox" data-test="dropdown-manual-toggle">
      Show dropdown
    </label>

    <select v-model="placement" data-test="dropdown-placement-select">
      <option v-for="option of ['bottom', 'top', 'left', 'right']"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>

  <VDropdown
    v-model:shown="shown"
    :triggers="[]"
    :auto-hide="false"
    :placement="placement"
    :style="{
      marginLeft: '400px',
      width: 'max-content',
    }"
    popper-class="zoom-in"
    compute-transform-origin
  >
    <button id="dropdown-btn" data-test="dropdown-manual-trigger">Click me</button>

    <template #popper>
      <div class="my-menu" data-test="dropdown-manual-content">
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

<style>
.v-popper__popper.zoom-in.v-popper__popper--show-from .v-popper__wrapper {
  transform: scale(.5);
}

.v-popper__popper.zoom-in.v-popper__popper--show-to .v-popper__wrapper {
  transform: none;
  transition: transform .15s;
}
</style>
