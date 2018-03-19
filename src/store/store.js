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
        total: 2,
        next: '/marketing-community'
    },
    {
        name: 'Marketing Community',
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
        axios.get("http://raspberrypi.host:3000/api/user")
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
        console.log('next page');
        console.log(state);
        axios.post("http://raspberrypi.host:3000/api/progress", { progress: state.page })
            .then(response => console.log(response))
            .catch(error => console.log(error)); 
    }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})