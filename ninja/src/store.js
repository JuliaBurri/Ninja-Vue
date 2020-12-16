import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        playerName: null
    },
    getters: {

    },
    mutations: {
        SET_PLAYER_NAME(state, data) {
            state.playerName = data;
        }
    },
    actions: {

    }
});