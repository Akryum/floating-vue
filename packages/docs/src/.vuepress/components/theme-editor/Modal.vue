<template>
  <div class="fixed z-50 inset-0 bg-white bg-opacity-90 flex items-center justify-center overflow-auto">
    <div class="p-4 rounded-xl bg-white shadow-lg space-y-4 border border-gray-50">
      <slot />

      <div class="flex items-center justify-center space-x-4">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
