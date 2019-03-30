// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import Vuex from 'vuex'
Vue.use(Vuex)


// 引入iview框架
import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式
Vue.use(iView);

// 个人的包
import './assets/css/base.css'
// 请求封装
import {post,get,patch,put} from '../common/require'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

// 请求示例:
/**
 *
 * @type {boolean}
 * 第一个参数为：api地址
 * 第二个参数为：{}请求的入参
 */
// this.$get('/api/v2/movie/top250',{})
//     .then((response) => {
//         console.log(response)
//     })

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
