import { getPresetClasses } from '../config'

/**
 * Options API mixin exposing a `themeClass` computed for the preset named by
 * `prop`, falling back to the `preset` prop when that one is not set.
 *
 * @deprecated Use the `usePresetClass` composable instead.
 */
export default (prop = 'theme') => ({
  computed: {
    themeClass (this: Record<string, string | undefined>) {
      return getPresetClasses(this[prop] ?? this.preset ?? 'dropdown')
    },
  },
})
