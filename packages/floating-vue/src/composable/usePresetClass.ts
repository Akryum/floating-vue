import { computed, type Ref } from 'vue'
import { getPresetClasses } from '../config'

/**
 * Computes the `v-popper--preset-*` classes for a preset name, including the
 * classes inherited through `$extend`.
 */
export function usePresetClass (preset: Ref<string>) {
  return computed(() => getPresetClasses(preset.value))
}
