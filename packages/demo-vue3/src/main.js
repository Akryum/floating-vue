import { createApp } from 'vue'
import VTooltip from 'v-tooltip'
import 'v-tooltip/dist/v-tooltip.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(VTooltip)
app.mount('#app')
