/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import 'v-tooltip/dist/v-tooltip.css'
import VTooltipPlugin from 'v-tooltip'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // ...apply enhancements for the site.

  Vue.use(VTooltipPlugin, {
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
}
