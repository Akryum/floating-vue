import './style.css'
import { createApp } from 'vue'
import FloatingVue, { defineFloatingVueConfig, definePopperPreset } from 'floating-vue'
import 'floating-vue/dist/style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(FloatingVue, defineFloatingVueConfig({
  presets: {
    'e2e-custom-dropdown': definePopperPreset({
      $extend: 'dropdown',
      arrowSize: 18,
      popperClass: 'e2e-custom-popper',
    }),
  },
}))
app.mount('#app')
