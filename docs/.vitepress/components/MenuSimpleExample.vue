<template>
  <div class="example flex justify-center">
    <VMenu>
      <button class="border border-gray-300 rounded px-4 py-2">
        Hover me
      </button>

      <template #popper>
        <button
          class="border border-gray-300 rounded px-4 py-2 m-4"
          @click="count++"
        >
          +{{ count }}
        </button>
      </template>
    </VMenu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 1,
    }
  },
}
</script>
