import Vue from 'vue'
import VueRouter from 'vue-router'
import FloatingVue, { createTooltip, destroyTooltip } from 'floating-vue'
import 'floating-vue/dist/style.css'
import './style/index.css'
import App from './App.vue'
import PageHome from './PageHome.vue'
import PageInstall from './PageInstall.vue'

Vue.use(FloatingVue, {
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

FloatingVue.options.delay = {
  show: 300,
  hide: 0,
}

console.log(FloatingVue.options)

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: PageHome },
    { path: '/install', name: 'install', component: PageInstall },
    { path: '/table', name: 'table', component: () => import('./PageTable.vue') },
    { path: '/hover-dropdown', name: 'hover-dropdown', component: () => import('./PageHoverDropdown.vue') },
    { path: '/test-dropdown', name: 'test-dropdown', component: () => import('./TestDropdown.vue') },
    { path: '/test-tooltip', name: 'test-tooltip', component: () => import('./TestTooltip.vue') },
    { path: '/test-menu', name: 'test-menu', component: () => import('./TestSubMenu.vue') },
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
    triggers: [],
  })
  tooltip.show()
  setTimeout(() => {
    destroyTooltip(el)
  }, 2000)
}
