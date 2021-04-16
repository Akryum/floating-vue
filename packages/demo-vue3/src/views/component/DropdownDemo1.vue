<template>
  <h1>Dropdown demo</h1>

  <div class="row">
    <VDropdown>
      <button id="dropdown-btn">Click me</button>

      <template #popper>
        <div class="my-menu">
          ✌️ Hello from v-tooltip + Vue 3
        </div>
      </template>
    </VDropdown>

    <button id="noop-btn">I do nothing.</button>
  </div>
</template>

<style lang="postcss" scoped>
.row {
  display: flex;
}

.my-menu {
  padding: 20px;
}
</style>
