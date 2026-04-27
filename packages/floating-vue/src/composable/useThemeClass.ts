import { computed, type Ref } from 'vue'
import { getThemeClasses } from '../config'

/**
 * Computes Floating Vue theme CSS classes from a theme ref.
 */
export function useThemeClass (theme: Ref<string>) {
  return computed(() => getThemeClasses(theme.value))
}
