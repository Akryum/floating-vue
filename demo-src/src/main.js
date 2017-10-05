import Vue from 'vue'
import VTooltip from '../../'

Vue.use(VTooltip, {
  disposeTimeout: 10000,
})

import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
})
