// @vue/component
export const PopperMethods = {
  methods: {
    show (...args) {
      return this.$refs.popper.show(...args)
    },
    hide (...args) {
      return this.$refs.popper.hide(...args)
    },
    dispose (...args) {
      return this.$refs.popper.dispose(...args)
    },
    onResize (...args) {
      return this.$refs.popper.onResize(...args)
    },
  },
}
