<template>
  <div class="meow">
    <VDropdown
      :triggers="['hover']"
      :popper-triggers="['hover']"
    >
      <button>Meow</button>

      <template #popper>
        Menu
      </template>
    </VDropdown>
  </div>
</template>

<style scoped>
.meow {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
