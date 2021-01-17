<script>
export default {
  inheritAttrs: false,

  model: {
    event: 'update',
  },

  props: {
    // eslint-disable-next-line
    value: {},

    autoFocus: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    valueModel: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('update', value)
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
    class="border border-gray-300 rounded px-3 py-2 w-full"
    v-on="$listeners"
  >
</template>
