import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
import store from './store'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'animate.css/animate.min.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.use(store)
app.mount('#app')
