import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/pages/1.Introduction'
import GettingStarted from '@/pages/2.GettingStarted'
import Concept from '@/pages/3.Concept'
import GameSystems from '@/pages/5.GameSystems'
import Design from '@/pages/4.Design'
import SoundMotion from '@/pages/6.SoundMotion'
import MarketingCommunity from '@/pages/7.MarketingCommunity'
import Finish from '@/pages/8.Finish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Introduction
    },
    {
      path: '/getting-started',
      component: GettingStarted
    },
    {
      path: '/concept',
      component: Concept
    },
    {
      path: '/design',
      component: Design
    },
    {
      path: '/game-systems',
      component: GameSystems
    },
    {
      path: '/sound-motion',
      component: SoundMotion
    },
    {
      path: '/marketing-community',
      component: MarketingCommunity
    },
    {
      path: '/finish',
      component: Finish
    }
  ]
})
