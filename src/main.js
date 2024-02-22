import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
// import Boostrap from '../node_modules/bootstrap'
import router from './router'

const app = createApp(App)

app.use(router)
// app.use(bootstrap)
app.mount('#app')
