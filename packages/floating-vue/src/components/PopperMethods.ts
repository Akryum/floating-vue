import type { PopperApi, PopperMethodOptions } from '../composable/popper/types'

type PopperRefMethods = Pick<PopperApi, 'show' | 'hide' | 'dispose' | 'onResize'>

/**
 * Component instance shape the mixin expects: a `popper` template ref holding a
 * popper component. Exported so the emitted declarations can name it.
 */
export interface WithPopperRef {
  $refs: { popper: PopperRefMethods }
}

/**
 * Options API mixin forwarding the popper methods of a `popper` template ref,
 * so a custom Options API component can re-expose them.
 *
 * @deprecated Use the `usePopperMethods` composable instead.
 */
export default {
  methods: {
    show (this: WithPopperRef, options?: PopperMethodOptions) {
      return this.$refs.popper.show(options)
    },
    hide (this: WithPopperRef, options?: PopperMethodOptions) {
      return this.$refs.popper.hide(options)
    },
    dispose (this: WithPopperRef) {
      return this.$refs.popper.dispose()
    },
    onResize (this: WithPopperRef) {
      return this.$refs.popper.onResize()
    },
  },
}
