<template>
  <div class="example flex justify-center">
    <VDropdown>
      <button class="border border-gray-500 rounded px-4 py-2">
        Click me
      </button>

      <template #popper>
        <div class="p-6 flex gap-2">
          <button class="underline cursor-pointer">Other button</button>
          <button v-close-popper class="underline cursor-pointer">Close</button>
        </div>
      </template>
    </VDropdown>
  </div>
</template>
