import Vue from 'vue'
import VueRouter from 'vue-router'
import VTooltip, { createTooltip, destroyTooltip } from '../'
import '../dist/v-tooltip.css'
import App from './App.vue'
import PageHome from './PageHome.vue'
import PageInstall from './PageInstall.vue'
const PageTable = () => import('./PageTable.vue')

Vue.use(VTooltip, {
  disposeTimeout: 5000,
  themes: {
    dropdown: {
      popperOptions: {
        modifiers: {
          preventOverflow: {
            padding: 12,
          },
        },
      },
    },
    // Custom theme
    'info-tooltip': {
      $extend: 'tooltip',
      delay: {
        show: 800,
        hide: 500,
      },
    },
  },
})

VTooltip.options.delay = {
  show: 300,
  hide: 0,
}

console.log(VTooltip.options)

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

// Create tooltips without the directive
window.manualTooltip = () => {
  const el = document.querySelector('button')
  const tooltip = createTooltip(el, {
    content: 'This is a manual tooltip',
    placement: 'bottom',
    trigger: 'manual',
  })
  tooltip.show()
  setTimeout(() => {
    destroyTooltip(el)
  }, 2000)
}
