<template>
  <div class="example flex justify-center">
    <VDropdown>
      <button class="border border-gray-300 rounded px-4 py-2">
        Click me
      </button>

      <template #popper>
        <div class="p-6">
          This is awesome!
        </div>
      </template>
    </VDropdown>
  </div>
</template>
