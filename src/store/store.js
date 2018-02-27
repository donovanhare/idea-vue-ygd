import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentSlide: 0
}

const getters = {
    getSlide(state) {
        return state.currentSlide;
    }
}

const mutations = {
    nextSlide(state) {
        state.currentSlide++;
    },

    resetSlide(state) {
        state.currentSlide = 0;
    }
}

const actions = {

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})