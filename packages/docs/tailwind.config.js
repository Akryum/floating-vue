const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      maxWidth: theme => ({
        ...theme('width'),
      }),

      screens: Object.keys(defaultTheme.screens).reduce((obj, key) => {
        const [rawMin] = defaultTheme.screens[key].split('px')
        const max = parseInt(rawMin) - 1
        obj[`!${key}`] = { max: `${max}px` }
        return obj
      }, {}),
    },
  },
}
