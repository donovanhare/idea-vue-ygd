import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentSlide: 0,
  totalSlides: 0,
  nextSlideUrl: '/',
  
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
        total: 2,
        next: '/mechanics'
    },
    {
        name: 'Mechanics',
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

    // resetSlides(state) {
    //     state.currentSlide = 0;
    // },

    // setNextSlideUrl(state, url) {
    //     state.nextSlideUrl = url;
    // },

    // setTotalSlides(state, total) {
    //     state.totalSlides = total;
    // }

}

const actions = {

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})