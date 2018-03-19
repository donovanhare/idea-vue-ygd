// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)

import draggable from 'vuedraggable'
Vue.component('draggable', draggable);

import Slide from './components/general/Slide.vue'
import Banner from './components/general/Banner.vue'
import Tabs from './components/general/Tabs.vue'
import TitlePage from './components/general/TitlePage.vue'
import TitleButton from './components/general/TitleButton.vue'
import NextSlide from './components/general/NxtSlideBtn.vue'

import Quiz from './components/activities/Quiz.vue'
import IdeaGenerator from './components/activities/IdeaGenerator.vue'
import Video from './components/activities/Video.vue'
import SortGame from './components/activities/SortGame.vue'

Vue.component('slide', Slide);
Vue.component('banner', Banner);
Vue.component('tabs', Tabs);
Vue.component('title-page', TitlePage);
Vue.component('title-button', TitleButton);
Vue.component('next-slide', NextSlide);

Vue.component('quiz', Quiz);
Vue.component('idea-generator', IdeaGenerator);
Vue.component('youtube', Video);
Vue.component('sort-game', SortGame);

Vue.mixin({
  methods: {
      nextStep($event) {
          if(this.$store.getters.slide < this.$store.getters.total) {
              this.$store.commit('nextSlide');
              $("html, body").animate({ scrollTop: $(document).height() }, 1000);
              return;                
          }
          
          this.$store.dispatch('postProgress');
          this.$router.push(this.$store.getters.next);
      },

      currentSlide(slide) {
          //is current slide visible
          return this.$store.getters.slide >= slide;
      }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
