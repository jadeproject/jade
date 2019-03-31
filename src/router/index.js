import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/home'
import Hub from '@/view/hub/hub'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '/dist',
  routes: [
    {
      path: '/',
      name: 'Hub',
      component: Hub
    },
    // {
    //   path: '/hub',
    //   name: 'Hub',
    //   component: Hub
    // }
  ]
})
