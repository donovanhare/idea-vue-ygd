import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/pages/Introduction'
import Concept from '@/pages/Concept'
import GameSystems from '@/pages/GameSystems'
import GettingStarted from '@/pages/GettingStarted'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/game-systems',
      name: 'GameSystems',
      component: GameSystems
    }
  ]
})
