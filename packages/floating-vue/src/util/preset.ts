/**
 * Shape of any props object that can carry a preset name, either through the
 * current `preset` prop or the deprecated `theme` alias.
 */
export interface PresetPropsLike {
  preset?: string | null
  /**
   * @deprecated Use `preset` instead.
   */
  theme?: string | null
}

/**
 * Resolves the preset name to use, preferring `preset` over the deprecated
 * `theme` alias. Returns `fallback` when neither is set.
 *
 * Reads both raw props rather than relying on `preset` already being resolved,
 * so it is safe to call from a Vue prop `default` factory, where sibling props
 * may not have had their own defaults applied yet.
 */
export function resolvePresetName (props: PresetPropsLike, fallback: string): string {
  return props.preset ?? props.theme ?? fallback
}

/**
 * Vue prop definition for the deprecated `theme` alias, shared by every
 * component that accepts a preset name.
 *
 * Deliberately has no `default`. Vue only defers a prop to its second
 * resolution pass when the prop declares a default (or is a Boolean); props
 * without one are assigned straight from the raw props in the first pass. Since
 * `preset` resolves its own default by reading `theme`, giving `theme` a default
 * would make it resolve *after* `preset` and the alias would always read as
 * undefined.
 */
export const deprecatedThemeProp = {
  type: String,
} as const
