<template>
  <div class="fixed z-[11000] inset-0 bg-white/90 dark:bg-gray-900/90 flex items-center justify-center overflow-auto">
    <div class="p-4 rounded-xl bg-white dark:bg-gray-900 shadow-lg space-y-4 border border-gray-50 dark:border-gray-800">
      <slot />

      <div class="flex items-center justify-center space-x-4">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
