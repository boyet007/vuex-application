import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import '../css/tailwind.css';
import * as filters from './filters';

const app = createApp(App);

app.use(router).use(store).mount('#app');
app.config.globalProperties.$filters = filters