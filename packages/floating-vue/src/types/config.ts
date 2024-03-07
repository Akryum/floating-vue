import { PopperConfig } from './popper.js'

export interface PopperPreset extends Partial<PopperConfig> {
  /**
   * Extend from another preset
   */
  $extend?: string

  /**
   * Don't use extended preset CSS classes.
   */
  $resetCss?: boolean
}

export interface Config extends Partial<PopperConfig> {
  /**
   * Presets allow reusing popper configurations
   */
  presets: Record<string, PopperPreset>
}
