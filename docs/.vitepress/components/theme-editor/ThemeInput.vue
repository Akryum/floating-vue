<script>
export default {
  inheritAttrs: false,

  props: {
    // eslint-disable-next-line
    modelValue: {},

    autoFocus: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    valueModel: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
      },
    },
  },

  mounted () {
    if (this.autoFocus) {
      this.$refs.input.focus()
    }
  },
}
</script>

<template>
  <input
    ref="input"
    v-model="valueModel"
    v-bind="$attrs"
    class="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 w-full"
  >
</template>
