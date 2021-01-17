<script>
export default {
  props: {
    color: {
      type: String,
      default: 'green',
    },

    flat: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <button
    class="flex items-center justify-center rounded text-center"
    :class="[
      `hover:bg-${color}-200 hover:text-${color}-900`,
      {
        [`bg-${color}-300 text-${color}-900`]: !flat,
      },
    ]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>
