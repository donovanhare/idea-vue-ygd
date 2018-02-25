import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/pages/Introduction'
import Concept from '@/pages/Concept'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/concept',
      name: 'Concept',
      component: Concept
    }
  ]
})
