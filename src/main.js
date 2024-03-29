import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixins/index'
import Button from './components/forms/Button.vue'

import style from './styles/main.css'

const app = createApp(App);

app.component('JButton', Button);

app.mixin(mixin);
app.use(store);
app.use(router);

app.mount('#app');
