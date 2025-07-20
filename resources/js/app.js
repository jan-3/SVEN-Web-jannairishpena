import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@mdi/font/css/materialdesignicons.css'

import Vue from 'vue';
import App from './App.vue'
// import vuetify from './vuetify';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);
const vuetify = new Vuetify({});
new Vue({
    vuetify,
    render: h=>h(App),
}).$mount('#app');