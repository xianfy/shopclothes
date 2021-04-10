import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import toast from '../src/components/common/toast'
import FastClick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

// 解决移动端延迟300ms  使用fastclick
FastClick.attach(document.body)

// 安装toast插件
Vue.use(toast) //内部会执行install方法

// 安装vueLazyLoad插件，第二个参数可以传一个对象，loading 等等
Vue.use(vueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})

// 事件总线所需创建的一个新Vue对象，并向其原型添加一个$bus
Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
