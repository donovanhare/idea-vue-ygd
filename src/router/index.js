import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/pages/1.Introduction'
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
      path: '/finish',
      component: Finish
    }
  ]
})
