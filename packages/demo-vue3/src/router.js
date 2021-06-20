import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

export const demos = [
  {
    path: '/directive/demo1',
    component: () => import('./views/directive/VTooltipDemo1.vue'),
    meta: {
      label: 'VTooltip 1',
    },
  },
  {
    path: '/directive/demo2',
    component: () => import('./views/directive/VTooltipDemo2Html.vue'),
    meta: {
      label: 'VTooltip 2',
    },
  },
  {
    path: '/directive/demo3',
    component: () => import('./views/directive/VTooltipDemo3Async.vue'),
    meta: {
      label: 'VTooltip 3',
    },
  },
  {
    path: '/directive/demo4',
    component: () => import('./views/directive/VTooltipDemo4Manual.vue'),
    meta: {
      label: 'VTooltip 4 Manual',
    },
  },
  {
    path: '/component/demo1',
    component: () => import('./views/component/DropdownDemo1.vue'),
    meta: {
      label: 'Dropdown 1',
    },
  },
  {
    path: '/component/demo2',
    component: () => import('./views/component/DropdownDemo2Manual.vue'),
    meta: {
      label: 'Dropdown 2',
    },
  },
]

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...demos,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
