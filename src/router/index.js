import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/pages/1.Introduction'
import GettingStarted from '@/pages/2.GettingStarted'
import Idea from '@/pages/3.Idea'
import Mechanics from '@/pages/4.Mechanics'
import Progression from '@/pages/5.Progression'
import GameSystems from '@/pages/6.GameSystems'
import LevelDesign from '@/pages/7.LevelDesign'
import SoundMotion from '@/pages/8.SoundMotion'
import KeyArt from '@/pages/9.KeyArt'
import Launch from '@/pages/10.Launch'
import Finish from '@/pages/11.Finish'

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
      path: '/idea',
      component: Idea
    },
    {
      path: '/mechanics',
      component: Mechanics
    },
    {
      path: '/progression',
      component: Progression
    },
    {
      path: '/game-systems',
      component: GameSystems
    },
    {
      path: '/level-design',
      component: LevelDesign
    },
    {
      path: '/sound-motion',
      component: SoundMotion
    },
    {
      path: '/key-art',
      component: KeyArt
    },
    {
      path: '/launch',
      component: Launch
    },
    {
      path: '/finish',
      component: Finish
    }
  ]
})
