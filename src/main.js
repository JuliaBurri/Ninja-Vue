import Vue from 'vue'
import App from './App.vue'
import Game from './views/Game'
import Highscore from './views/Highscore'
import About from './views/About'
import Home from './views/Home.vue'
import VueRouter from 'vue-router';
import Toast from "vue-toastification";
import VueNativeSock from 'vue-native-websocket'
import VueResource from 'vue-resource'
import store from "./store";
import vuetify from './plugins/vuetify'
import './registerServiceWorker'

Vue.use(VueResource)

Vue.use(VueRouter);
Vue.use(VueNativeSock, 'ws://ninja-backend.herokuapp.com/websocket', {
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 10,
});
Vue.use(Toast, {});

const router = new VueRouter({
//  mode: 'hash',
  routes: [
    {path: '/game', name: "Game", component: Game},
    {path: '/highscore', name: "Highscore", component: Highscore},
    {path: '/about', name: "About", component: About},
    {path: '/', name: "Home", component: Home},
    {path :'*', component: Home}
  ],

});

new Vue({
  router: router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
