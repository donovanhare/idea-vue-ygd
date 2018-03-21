import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router';

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
        next: '/idea'
    },
    {
        name: 'Idea',
        current: 0,
        total: 2,
        next: '/mechanics'
    },
    {
        name: 'Mechanics',
        current: 0,
        total: 3,
        next: '/progression'
    },
    {
        name: 'Progression',
        current: 0,
        total: 1,
        next: '/game-systems'
    },
    {
        name: 'Game Systems',
        current: 0,
        total: 3,
        next: '/level-design'
    },
    {
        name: 'Level Design',
        current: 0,
        total: 1,
        next: '/sound-motion'
    },
    {
        name: 'Sound Motion',
        current: 0,
        total: 3,
        next: '/key-art'
    },
    {
        name: 'Key Art',
        current: 0,
        total: 1,
        next: '/launch'
    },
    {
        name: 'Launch',
        current: 0,
        total: 2,
        next: '/finish'
    },
    {
        name: 'Finish',
        current: 0,
        total: 1,
        next: '/'
    },
  ],
  user: null
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
    },

    user(state) {
        return state.user;
    },

    progress(state) {
        return state.user.progress;
    }

}

const mutations = {
    nextSlide(state) {
        state.pages[state.page].current++;
    },

    page(state, page) {
        state.page = page;
    },

    user(state, user) {
        state.user = user;
    }
}

const actions = {
    getUser(context) {
        return null;
        axios.get("https://ygd.idea.org.uk/api/user")
            .then(response => {
               console.log(response); //if not error
               context.commit('user', response.data);
               if(response.data.progress) {
                    context.commit('page', response.data.progress);
                    router.push(router.options.routes[response.data.progress + 1].path);
                    console.log(router.options.routes[response.data.progress + 1].path);
               }
            })
            .catch((error) => {                
                console.log(error)
            }); //redirect to idea
    },

    postProgress({state}) {
        return null;
        console.log('next page');
        console.log(state);
        axios.post("https://ygd.idea.org.uk/api/progress", { progress: state.page })
            .then(response => console.log(response))
            .catch(error => console.log(error)); 
    },

    postResult({state}, result) {
        return null;
        axios.post("https://ygd.idea.org.uk/api/result", { result: result })
            .then(response => {
                console.log(response);
                console.log(response.data.redirect_uri);
                if(response.data.redirect_uri) {
                    //window.location.href = response.data.redirect_uri;
                } else {
                    //window.location.href = 'https://idea.org.uk/badge/game-concept/complete?issue=1';
                }
            })
            .catch(error => console.log(error)); 
    }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})