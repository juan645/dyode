import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import mainPage from './pages/home';
import VueRouter from 'vue-router';
import './assets/scss/main.scss'
import VueCarousel from 'vue-carousel';
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueCarousel);
const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: mainPage,
        }
    ]
});
new Vue({
    render: h => h(App),
    router
}).$mount('#app');



