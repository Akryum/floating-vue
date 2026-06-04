<template>
  <h1>Custom preset demo</h1>

  <VDropdown theme="e2e-custom-dropdown">
    <button data-test="custom-preset-trigger">
      Open custom preset
    </button>

    <template #popper>
      <div data-test="custom-preset-content" class="px-4 py-3">
        Custom preset dropdown
      </div>
    </template>
  </VDropdown>
</template>
