import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Game from './components/Game'
import Highscore from './components/Highscore'
import About from './components/About'
import Home from './components/Home.vue'
import VueRouter from 'vue-router';
import Toast from "vue-toastification";
import VueNativeSock from 'vue-native-websocket'
import VueResource from 'vue-resource'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:9000/'
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueNativeSock, 'ws://localhost:9000/websocket', {
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: Infinity, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 10, // (Number) how long to initially wait before attempting a new (1000)
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
  render: h => h(App),

}).$mount('#app')
