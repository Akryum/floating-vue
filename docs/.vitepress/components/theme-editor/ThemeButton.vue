<script>
export default {
  props: {
    color: {
      type: String,
      default: 'emerald',
    },

    flat: {
      type: Boolean,
      default: false,
    },
  },

  created () {
    this.colors = {
      emerald: {
        normal: 'bg-emerald-300 text-emerald-900',
        hover: 'hover:bg-emerald-200 hover:text-emerald-900',
      },
      red: {
        normal: 'bg-red-300 text-red-900',
        hover: 'hover:bg-red-200 hover:text-red-900',
      },
      gray: {
        normal: 'bg-gray-300/25 text-gray-900',
        hover: 'hover:bg-gray-200 hover:text-gray-900',
      },
    }
  },
}
</script>

<template>
  <button
    class="flex items-center justify-center rounded text-center"
    :class="[
      colors[color].hover,
      {
        [colors[color].normal]: !flat,
      },
    ]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>
