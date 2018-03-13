import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {  
  page: 0,
  pages: [
    {
        name: 'Introduction',
        current: 0,
        total: 0,
        next: '/getting-started'
    },
    {
        name: 'Getting Started',
        current: 0,
        total: 2,
        next: '/concept'
    },
    {
        name: 'Concept',
        current: 0,
        total: 3,
        next: '/design'
    },
    {
        name: 'Design',
        current: 0,
        total: 3,
        next: '/game-systems'
    },
    {
        name: 'GameSystems',
        current: 0,
        total: 2,
        next: '/sound-motion'
    },
    {
        name: 'SoundMotion',
        current: 0,
        total: 1,
        next: '/marketing-community'
    },
    {
        name: 'Marketing Community',
        current: 0,
        total: 1,
        next: '/finish'
    },
    {
        name: 'Finish',
        current: 0,
        total: 1,
        next: '/'
    },
  ]
}

const getters = {
    page(state) {
        return state.page;
    },

    slide(state) {
        return state.pages[state.page].current;
    },

    next(state) {
        return state.pages[state.page].next;
    },

    total(state) {
        return state.pages[state.page].total;
    }

}

const mutations = {
    nextSlide(state) {
        state.pages[state.page].current++;
    },

    page(state, page) {
        state.page = page;
    },
}

const actions = {

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})