import Vuex from 'vuex'
import axios from 'axios'

export default new Vuex.Store({
    state: {
        player: {}
    },
    mutations: {
        setPlayer(state, player) {
            state.player = player;
        }
    },
    getters: {
        getPlayer(state) {
            return state.player;
        }
    },
    actions: {
        async fetchPlayer({ commit }) {
            try {
                const response = await axios.get('http://interview.wptdev.com/api/killfeed');
                commit('setPlayer', response.data.payload[0]);
            } catch (error) {
                console.error(error);
            }
        }
    }
})