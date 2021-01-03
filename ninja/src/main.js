import Vue from 'vue'
import App from './App.vue'
import Game from './components/Game'
import Highscore from './components/Highscore'
import About from './components/About'
import Home from './components/Home.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';
import Toast from "vue-toastification";
import VueNativeSock from 'vue-native-websocket'
import VueResource from 'vue-resource'
import store from "./store";


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueResource)


Vue.http.options.root = 'http://localhost:9000/'
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueNativeSock, 'ws://localhost:9000/websocket', {
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 10,
});
Vue.use(Toast, {});

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/game', name: "Game", component: Game},
    {path: '/highscore', name: "Highscore", component: Highscore},
    {path: '/about', name: "About", component: About},
    {path: '/', name: "Home", component: Home}

  ]
});

new Vue({
  router: router,
  store,
  render: h => h(App),

}).$mount('#app')
