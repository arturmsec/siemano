import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import store from './store/index'
import './registerServiceWorker'
import VueGoogleMaps from '@fawmi/vue-google-maps'



const app = createApp(App)

app.use(VueGoogleMaps, {
    load: {
        key: '',
    }
});

app.use(VueToast, {
    position: 'top',
    duration: 5000
});
app.use(router);
app.use(store);

app.mount('#app');
