import DefaultTheme from 'vitepress/theme'
import './style.postcss'
import 'floating-vue/style.css'
import FloatingVue, { createTooltip } from 'floating-vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(FloatingVue, {
      boundary: 'body',
      themes: {
        '_editor-tooltip': {
          $extend: 'tooltip',
          hideTriggers: events => events,
          instantMove: true,
          delay: { show: 100, hide: 200 },
          html: true,
        },
        '_editor-dropdown': {
          $extend: 'dropdown',
        },
      },
    })

    if (typeof window !== 'undefined') {
      window.createTooltip = createTooltip
    }
  }
}
