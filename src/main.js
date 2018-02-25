// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Banner from './components/general/Banner.vue'
Vue.component('banner', Banner);

import Tabs from './components/general/Tabs.vue'
Vue.component('tabs', Tabs);

import Quiz from './components/activities/Quiz.vue'
Vue.component('quiz', Quiz);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, Tabs },
  template: '<App/>'
})
