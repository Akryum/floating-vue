import { getThemeClasses } from '../config'

// @vue/component
export const ThemeClass = (prop = 'theme') => ({
  computed: {
    themeClass () {
      return getThemeClasses(this[prop])
    },
  },
})
