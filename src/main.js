import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router/route.js'
import { createPinia } from 'pinia'

const pinia = createPinia();   //pinia instance created

createApp(App)
.use(router)
.use(pinia)
.mount('#app')
