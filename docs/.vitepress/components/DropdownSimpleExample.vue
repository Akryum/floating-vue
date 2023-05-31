<template>
  <div class="example flex justify-center">
    <VDropdown
      @show="log('show')"
      @apply-show="log('apply-show')"
      @hide="log('hide')"
      @apply-hide="log('apply-hide')"
      @update:shown="log('update:shown', $event)"
    >
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

<script>
export default {
  methods: {
    log (...args) {
      console.log(...args)
    },
  },
}
</script>
