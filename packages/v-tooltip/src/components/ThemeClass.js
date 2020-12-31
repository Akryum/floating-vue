import { getThemeClasses } from '../config'

// @vue/component
export default {
  computed: {
    themeClass () {
      return getThemeClasses(this.theme)
    },
  },
}
