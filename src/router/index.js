import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/pages/1.Introduction'
import GettingStarted from '@/pages/2.GettingStarted'
import Concept from '@/pages/3.Concept'
import GameSystems from '@/pages/5.GameSystems'
import Design from '@/pages/4.Design'
import SoundMotion from '@/pages/6.SoundMotion'

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
      path: '/design',
      name: 'Design',
      component: Design
    },
    {
      path: '/game-systems',
      name: 'GameSystems',
      component: GameSystems
    },
    {
      path: '/sound-motion',
      name: 'SoundMotion',
      component: SoundMotion

    }
  ]
})
