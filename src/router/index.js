import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/pages/Introduction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introduction
    }
  ]
})
