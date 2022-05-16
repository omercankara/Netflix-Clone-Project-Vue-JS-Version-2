import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {appAxios} from "../utils/axios"

const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$appAxios = appAxios
app.mount('#app')
