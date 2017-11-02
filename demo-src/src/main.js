import Vue from 'vue'
import VueRouter from 'vue-router'
import VTooltip from '../../'
import App from './App.vue'
import PageHome from './PageHome.vue'
import PageInstall from './PageInstall.vue'

Vue.use(VTooltip, {
  disposeTimeout: 5000,
  defaultDelay: 500,
  popover: {
    defaultDelay: 0,
  },
})

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: PageHome },
    { path: '/install', name: 'install', component: PageInstall },
    { path: '*', redirect: '/' },
  ],
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
