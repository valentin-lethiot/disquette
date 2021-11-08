import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        allDisquettes: [],
        currentDisquette: ''
    },

    getters: {
        getCurrentDisquette(state) {
            return state.currentDisquette
        }
    },

    mutations: {
        setCurrentDisquette(state, disquette) {
            state.currentDisquette = disquette
        },

        addNewDisquette(state, newDisquette) {
            state.allDisquettes.push(newDisquette)
        },

        storeAllDisquettes(state, allDisquettes) {
            state.allDisquettes = allDisquettes
        }
    },

    actions: {
        async fetchAllDisquettes({commit}) {
            try {
                const disquettes = await axios.get("http://localhost:8081/disquettes")
                commit('storeAllDisquettes', disquettes.data)
            } catch (e) {
                console.error(e)
            }
        },

        setNewCurrentDisquette({commit, state}) {
            let newDisquette = ''
            let currentDisquetteIndex = -1

            if (state.currentDisquette) {
                currentDisquetteIndex = state.allDisquettes.findIndex(disquette => state.currentDisquette === disquette)
            }

            let newDisquetteIndex = currentDisquetteIndex
            while (currentDisquetteIndex === newDisquetteIndex) {
               newDisquetteIndex = Math.floor(Math.random() * state.allDisquettes.length)
            }
            newDisquette = state.allDisquettes[newDisquetteIndex]

            commit('setCurrentDisquette', newDisquette)
        },

        async addNewDisquette({commit}, newDisquette) {
            try {
                await axios.post("http://localhost:8081/disquettes", {disquette: newDisquette})
                commit('addNewDisquette', newDisquette)
            } catch (e) {
                console.error(e)
            }
        }
    }

})
