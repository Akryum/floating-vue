export const config = {
  // Disable popper components
  disabled: false,
  // Default position offset (px)
  offset: 0,
  // Default container where the tooltip will be appended
  container: 'body',
  // Element used to compute position and size boundaries
  boundariesElement: undefined,
  // Displayed when tooltip content is loading
  loadingContent: '...',
  // Hide on mouseover tooltip
  autoHide: true,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5000,
  // Close tooltip on click on popper target?
  hideOnTargetClick: false,
  // Options passed to Popper constructor
  popperOptions: {},
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: 'top',
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0,
      },
      // Default events that trigger the tooltip
      trigger: 'hover focus',
      // Update popper on content resize
      handleResize: false,
      // Close tooltip on click on tooltip target?
      hideOnTargetClick: true,
      // Enable HTML content in directive
      contentHtml: true,
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: 'bottom',
      // Delay (ms)
      delay: 0,
      // Default events that trigger the dropdown
      trigger: 'click',
      // Update popper on content resize
      handleResize: true,
    },
  },
}

/**
 * Get default config value depending on theme
 */
export function getDefaultConfig (theme, key) {
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
export function getThemeClasses (theme) {
  let result = [theme]
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
