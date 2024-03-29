import { createApp } from 'vue'
import App from './App.vue'

import './index.css'

import router from './router/index'
import store from './store/index'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import ToastService from "primevue/toastservice";

createApp(App).use(router).use(store).use(PrimeVue).use(ToastService).mount('#app')
