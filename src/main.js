import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

import router from './shared/router/index.js'

const app = createApp(App);
const pinia = createPinia();

// Register the store
app.use(pinia);
// Register the router
app.use(router);

app.mount('#app');