import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/dist',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
