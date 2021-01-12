<template>
  <div class="example flex justify-center">
    <VDropdown>
      <button class="border border-gray-300 rounded px-4 py-2">
        Click me
      </button>

      <template #popper>
        This is awesome!
      </template>
    </VDropdown>
  </div>
</template>
