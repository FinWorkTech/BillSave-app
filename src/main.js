import './style.css'
import App from './App.vue'
import { createApp } from 'vue'

import router from './shared/router/index.js'

const app = createApp(App);

// Register the router
app.use(router);

app.mount('#app');