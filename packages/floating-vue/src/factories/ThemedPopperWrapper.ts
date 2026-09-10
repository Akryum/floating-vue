import { PopperWrapper } from '../components/PopperWrapper'

/**
 * A `PopperWrapper` variant with its own name and default theme — same recipe
 * as the themed-component guide in the docs.
 */
export function createThemedPopperWrapper (name: string, vPopperTheme: string) {
  return ({
    ...PopperWrapper,
    name,
    vPopperTheme,
    // `vPopperTheme` is a custom option (read from `$options`), invisible to the component type
  }) as unknown as typeof PopperWrapper
}
