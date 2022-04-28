import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App)
app.use(VueToast, {
    position: 'top',
    duration: 5000
});
app.use(router);

app.mount('#app');
