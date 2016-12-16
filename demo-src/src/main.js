import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
})
