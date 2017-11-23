import Vue from 'vue'
import VueRouter from 'vue-router'
import VTooltip from '../../'
import App from './App.vue'
import PageHome from './PageHome.vue'
import PageInstall from './PageInstall.vue'
const PageTable = () => import('./PageTable.vue')

Vue.use(VTooltip, {
  disposeTimeout: 5000,
})

VTooltip.options.defaultDelay = {
  show: 300,
  hide: 0,
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: PageHome },
    { path: '/install', name: 'install', component: PageInstall },
    { path: '/table', name: 'table', component: PageTable },
    { path: '*', redirect: '/' },
  ],
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
