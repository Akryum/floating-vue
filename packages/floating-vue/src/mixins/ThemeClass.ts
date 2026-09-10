import { getThemeClasses } from '../config'

// @vue/component
export default (prop = 'theme') => ({
  computed: {
    themeClass () {
      return getThemeClasses(this[prop])
    },
  },
})
