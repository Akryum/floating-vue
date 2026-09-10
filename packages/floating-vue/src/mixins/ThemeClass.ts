import { getThemeClasses } from '../config'

// @vue/component
export const ThemeClass = (prop = 'theme') => ({
  computed: {
    themeClass (this: Record<string, string>): string[] {
      return getThemeClasses(this[prop])
    },
  },
})
