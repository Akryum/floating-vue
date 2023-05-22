<template>
  <div class="example flex justify-center">
    <VDropdown
      popper-class="zoom-show-only"
      compute-transform-origin
    >
      <button class="border border-gray-300 rounded px-4 py-2">
        Click me
      </button>

      <template #popper>
        This is awesome!
      </template>
    </VDropdown>
  </div>
</template>

<style>
.v-popper__popper.zoom-show-only.v-popper__popper--show-from .v-popper__wrapper {
  transform: scale(.5);
}

.v-popper__popper.zoom-show-only.v-popper__popper--show-to .v-popper__wrapper {
  transform: none;
  transition: transform .15s;
}
</style>
