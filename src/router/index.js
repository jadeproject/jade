import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/home'
import Hub from '@/view/hub/hub'
import Invite from '@/view/invite/invite'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '/dist',
  routes: [
    {
      path: '/hub',
      name: 'Hub',
      component: Hub
    },{
      path: '/',
      name: 'Invite',
      component: Invite 
    },
    // {
    //   path: '/hub',
    //   name: 'Hub',
    //   component: Hub
    // }
  ]
})
