import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Axios from '../utils/axios';

const app = createApp(App)

app.config.globalProperties.$Axios = Axios;
app.use(createPinia())
app.use(router)

app.mount('#app')
