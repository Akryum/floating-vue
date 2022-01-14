/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import 'floating-vue/dist/style.css'
import FloatingVue, { createTooltip } from 'floating-vue'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // ...apply enhancements for the site.

  Vue.use(FloatingVue, {
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
