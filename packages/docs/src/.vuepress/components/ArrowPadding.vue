<template>
  <div class="example space-y-12 md:space-y-6">
    <VTooltip
      :triggers="[]"
      :shown="true"
      placement="right"
      :distance="offset[1]"
      :skidding="offset[0]"
      :prevent-overflow="false"
      :arrow-padding="tempPadding"
    >
      <button class="px-4 py-6 bg-gray-500 text-white rounded-lg !md:text-sm">
        Reference
      </button>

      <template #popper>
        Offset: {{ offset }}<br>
        Arrow Padding: {{ tempPadding }}
      </template>
    </VTooltip>

    <div class="flex !md:flex-col items-center !md:space-y-6 md:space-x-6">
      <input
        v-model.number="offset[0]"
        type="range"
        min="-64"
        max="64"
        class="w-full"
      >

      <input
        v-model.number="tempPadding"
        type="range"
        min="0"
        max="12"
        class="w-full"
      >

      <button
        class="flex-none border border-gray-300 rounded px-8 md:px-2 !md:py-3"
        @click="offset = [...offset];tempPadding = padding"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    padding: {
      type: Number,
      default: 0,
    },
  },

  data () {
    return {
      offset: [-32, 0],
      tempPadding: this.padding,
    }
  },
}
</script>
