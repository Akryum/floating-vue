interface PopperRef {
  show: (...args: any[]) => any
  hide: (...args: any[]) => any
  dispose: (...args: any[]) => any
  onResize: (...args: any[]) => any
}

interface WithPopperRef { $refs: { popper: PopperRef } }

// @vue/component
export const PopperMethods = {
  methods: {
    show (this: WithPopperRef, ...args: any[]) {
      return this.$refs.popper.show(...args)
    },
    hide (this: WithPopperRef, ...args: any[]) {
      return this.$refs.popper.hide(...args)
    },
    dispose (this: WithPopperRef, ...args: any[]) {
      return this.$refs.popper.dispose(...args)
    },
    onResize (this: WithPopperRef, ...args: any[]) {
      return this.$refs.popper.onResize(...args)
    },
  },
}
