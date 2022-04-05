import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

export const demos = [
  {
    path: '/directive/demo1',
    component: () => import('./views/directive/VTooltipDemo1.vue'),
    meta: {
      label: 'Directive simple',
    },
  },
  {
    path: '/directive/demo2',
    component: () => import('./views/directive/VTooltipDemo2Html.vue'),
    meta: {
      label: 'Directive HTML',
    },
  },
  {
    path: '/directive/demo3',
    component: () => import('./views/directive/VTooltipDemo3Async.vue'),
    meta: {
      label: 'Directive async',
    },
  },
  {
    path: '/directive/demo4',
    component: () => import('./views/directive/VTooltipDemo4Input.vue'),
    meta: {
      label: 'Directive input',
    },
  },
  {
    path: '/directive/demo5',
    component: () => import('./views/directive/VTooltipDemo5Manual.vue'),
    meta: {
      label: 'Directive manual',
    },
  },
  {
    path: '/directive/create-tooltip',
    component: () => import('./views/directive/CreateTooltip.vue'),
    meta: {
      label: 'createTooltip',
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
  {
    path: '/component/submenu1',
    component: () => import('./views/component/SubMenuDemo1.vue'),
    meta: {
      label: 'Submenu 1',
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
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
