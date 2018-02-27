import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/pages/Introduction'
import Concept from '@/pages/Concept'
import Mechanics from '@/pages/Mechanics'
import GettingStarted from '@/pages/GettingStarted'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/getting-started',
      name: 'GettingStarted',
      component: GettingStarted
    },
    {
      path: '/concept',
      name: 'Concept',
      component: Concept
    },
    {
      path: '/mechanics',
      name: 'Mechanics',
      component: Mechanics
    }
  ]
})
