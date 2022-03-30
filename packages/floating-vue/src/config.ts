export type FloatingVueConfig = any // @TODO

export const config: FloatingVueConfig = {
  // Disable popper components
  disabled: false,
  // Default position offset along main axis (px)
  distance: 5,
  // Default position offset along cross axis (px)
  skidding: 0,
  // Default container where the tooltip will be appended
  container: 'body',
  // Element used to compute position and size boundaries
  boundary: undefined,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: false,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5000,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: 'absolute',
  // Prevent overflow
  preventOverflow: true,
  // Flip to the opposite placement if needed
  flip: true,
  // Shift on the cross axis to prevent the popper from overflowing
  shift: true,
  // Overflow padding (px)
  overflowPadding: 0,
  // Arrow padding (px)
  arrowPadding: 0,
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: true,
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: 'top',
      // Default events that trigger the tooltip
      triggers: ['hover', 'focus', 'touch'],
      // Close tooltip on click on tooltip target
      hideTriggers: events => [...events, 'click'],
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0,
      },
      // Update popper on content resize
      handleResize: false,
      // Enable HTML content in directive
      html: false,
      // Displayed when tooltip content is loading
      loadingContent: '...',
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: 'bottom',
      // Default events that trigger the dropdown
      triggers: ['click'],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: true,
      // Hide on clock outside
      autoHide: true,
    },
    menu: {
      $extend: 'dropdown',
      triggers: ['hover', 'focus'],
      popperTriggers: ['hover', 'focus'],
      delay: {
        show: 0,
        hide: 400,
      },
    },
  },
}

/**
 * Get default config value depending on theme
 */
export function getDefaultConfig (theme: string, key: string): any {
  let themeConfig = config.themes[theme] || {}
  let value
  do {
    value = themeConfig[key]
    if (typeof value === 'undefined') {
      // Support theme extend
      if (themeConfig.$extend) {
        themeConfig = config.themes[themeConfig.$extend] || {}
      } else {
        // Base config
        themeConfig = null
        value = config[key]
      }
    } else {
      themeConfig = null
    }
  } while (themeConfig)
  return value
}

/**
 * Theme CSS inheritance
 */
export function getThemeClasses (theme: string): string[] {
  const result = [theme]
  let themeConfig = config.themes[theme] || {}
  do {
    // Support theme extend
    if (themeConfig.$extend && !themeConfig.$resetCss) {
      result.push(themeConfig.$extend)
      themeConfig = config.themes[themeConfig.$extend] || {}
    } else {
      themeConfig = null
    }
  } while (themeConfig)
  return result.map(c => `v-popper--theme-${c}`)
}

export function getAllParentThemes (theme: string): string[] {
  const result = [theme]
  let themeConfig = config.themes[theme] || {}
  do {
    // Support theme extend
    if (themeConfig.$extend) {
      result.push(themeConfig.$extend)
      themeConfig = config.themes[themeConfig.$extend] || {}
    } else {
      themeConfig = null
    }
  } while (themeConfig)
  return result
}
