// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)

import Banner from './components/general/Banner.vue'
import Tabs from './components/general/Tabs.vue'
import TitlePage from './components/general/TitlePage.vue'
import TitleButton from './components/general/TitleButton.vue'

import Quiz from './components/activities/Quiz.vue'
import IdeaGenerator from './components/activities/IdeaGenerator.vue'

Vue.component('banner', Banner);
Vue.component('tabs', Tabs);
Vue.component('title-page', TitlePage);
Vue.component('title-button', TitleButton);

Vue.component('quiz', Quiz);
Vue.component('idea-generator', IdeaGenerator);

Vue.mixin({
  methods: {
      nextStep($event) {
          if(this.$store.getters.slide < this.$store.getters.total) {
              this.$store.commit('nextSlide');
              $("html, body").animate({ scrollTop: $(document).height() }, 1000);
              return;                
          }
          
          this.$router.push(this.$store.getters.next);
      },

      currentSlide(slide) {
          //is current slide visible
          return this.$store.getters.slide > slide;
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
