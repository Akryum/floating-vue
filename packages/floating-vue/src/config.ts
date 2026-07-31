import { Config, PopperPreset } from './types/config.js'
import type { PopperConfig } from './types/popper.js'

export type FloatingVueConfig = Partial<Config>
type StrictConfig<T, Shape> = T & Record<Exclude<keyof T, keyof Shape>, never>

export const config: Config = {
  disabled: false,
  distance: 5,
  skidding: 0,
  container: 'body',
  boundary: undefined,
  instantMove: false,
  disposeTimeout: 150,
  popperTriggers: [],
  strategy: 'absolute',
  preventOverflow: true,
  flip: true,
  shift: true,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowSize: undefined,
  arrowOverflow: true,
  autoHideOnMousedown: false,
  presets: {
    tooltip: {
      placement: 'top',
      triggers: ['hover', 'focus', 'touch'],
      hideTriggers: events => [...events, 'click'],
      delay: {
        show: 200,
        hide: 0,
      },
      handleResize: false,
      html: false,
      loadingContent: '...',
      ariaRole: 'tooltip',
    },
    dropdown: {
      placement: 'bottom',
      triggers: ['click'],
      delay: 0,
      handleResize: true,
      autoHide: true,
      ariaRole: 'dialog',
    },
    menu: {
      $extend: 'dropdown',
      triggers: ['hover', 'focus'],
      popperTriggers: ['hover'],
      delay: {
        show: 0,
        hide: 400,
      },
      ariaRole: 'menu',
    },
  },
}

// `presets` used to be called `themes`. The alias is a non-enumerable accessor over
// the same object, so `options.themes.foo = {}` mutates `config.presets` and a
// `{ themes: … }` plugin option deep-merges into it through `assign`.
Object.defineProperty(config, 'themes', {
  enumerable: false,
  get () {
    return config.presets
  },
  set (value: Record<string, PopperPreset>) {
    config.presets = value
  },
})

/**
 * Provides autocomplete and excess-property checks for Floating Vue plugin config.
 */
export function defineFloatingVueConfig<T extends FloatingVueConfig> (config: StrictConfig<T, FloatingVueConfig>): T {
  return config
}

/**
 * Provides autocomplete and excess-property checks for a single preset.
 */
export function definePopperPreset<T extends PopperPreset> (preset: StrictConfig<T, PopperPreset>): T {
  return preset
}

/**
 * Get default config value depending on preset.
 */
export function getDefaultConfig<K extends keyof PopperConfig> (preset: string, key: K): PopperConfig[K] | undefined {
  let presetConfig: PopperPreset | null = config.presets[preset] ?? {}
  let value: PopperConfig[K] | undefined
  do {
    value = getConfigValue(presetConfig, key)
    if (typeof value === 'undefined') {
      // Support preset extend
      if (presetConfig.$extend) {
        presetConfig = config.presets[presetConfig.$extend] ?? {}
      } else {
        // Base config
        presetConfig = null
        value = getConfigValue(config, key)
      }
    } else {
      presetConfig = null
    }
  } while (presetConfig)
  return value
}

/**
 * Reads a config value while preserving the requested key's value type.
 */
function getConfigValue<K extends keyof PopperConfig> (source: Partial<PopperConfig>, key: K): PopperConfig[K] | undefined {
  return source[key]
}

/**
 * Preset CSS inheritance.
 */
export function getPresetClasses (preset: string): string[] {
  const result = [preset]
  let presetConfig: PopperPreset | null = config.presets[preset] ?? {}
  do {
    // Support preset extend
    if (presetConfig.$extend && !presetConfig.$resetCss) {
      result.push(presetConfig.$extend)
      presetConfig = config.presets[presetConfig.$extend] ?? {}
    } else {
      presetConfig = null
    }
  } while (presetConfig)
  // Each preset also emits the pre-v5 `v-popper--theme-*` spelling so stylesheets
  // written against the old class keep matching. Deprecated, removed in a future major.
  return result.flatMap(c => [`v-popper--preset-${c}`, `v-popper--theme-${c}`])
}

/**
 * Returns a preset and every preset it extends, closest first.
 */
export function getAllParentPresets (preset: string): string[] {
  const result = [preset]
  let presetConfig: PopperPreset | null = config.presets[preset] ?? {}
  do {
    // Support preset extend
    if (presetConfig.$extend) {
      result.push(presetConfig.$extend)
      presetConfig = config.presets[presetConfig.$extend] ?? {}
    } else {
      presetConfig = null
    }
  } while (presetConfig)
  return result
}
