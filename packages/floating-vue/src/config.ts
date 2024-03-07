import { Config } from './types/config.js'

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
    },
    dropdown: {
      placement: 'bottom',
      triggers: ['click'],
      delay: 0,
      handleResize: true,
      autoHide: true,
    },
    menu: {
      $extend: 'dropdown',
      triggers: ['hover', 'focus'],
      popperTriggers: ['hover'],
      delay: {
        show: 0,
        hide: 400,
      },
    },
  },
}

/**
 * Get default config value depending on preset
 */
export function getDefaultConfig (preset: string, key: string): Config {
  let presetConfig = config.presets[preset] || {}
  let value
  do {
    value = presetConfig[key]
    if (typeof value === 'undefined') {
      // Support preset extend
      if (presetConfig.$extend) {
        presetConfig = config.presets[presetConfig.$extend] || {}
      } else {
        // Base config
        presetConfig = null
        value = config[key]
      }
    } else {
      presetConfig = null
    }
  } while (presetConfig)
  return value
}

/**
 * Theme CSS inheritance
 */
export function getThemeClasses (preset: string): string[] {
  const result = [preset]
  let presetConfig = config.presets[preset] || {}
  do {
    // Support preset extend
    if (presetConfig.$extend && !presetConfig.$resetCss) {
      result.push(presetConfig.$extend)
      presetConfig = config.presets[presetConfig.$extend] || {}
    } else {
      presetConfig = null
    }
  } while (presetConfig)
  return result.map(c => `v-popper--preset-${c}`)
}

export function getAllParentThemes (preset: string): string[] {
  const result = [preset]
  let presetConfig = config.presets[preset] || {}
  do {
    // Support preset extend
    if (presetConfig.$extend) {
      result.push(presetConfig.$extend)
      presetConfig = config.presets[presetConfig.$extend] || {}
    } else {
      presetConfig = null
    }
  } while (presetConfig)
  return result
}
