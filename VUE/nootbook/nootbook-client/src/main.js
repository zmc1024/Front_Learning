import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import axios from 'axios'
import util from './assets/js/util.js'

import { Swipe, SwipeItem, Toast, Icon, Field, Uploader, ActionSheet } from 'vant';
import 'vant/lib/index.css';

Vue.use(Swipe).use(SwipeItem).use(Toast).use(Icon).use(Field).use(Uploader).use(ActionSheet)
Vue.use(axios)

Vue.config.productionTip = false

// 在vue原型上新增一个 $http属性，并把axios挂载到上面
Vue.prototype.$http = axios
Vue.prototype.$util = util

// 路由跳转前
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
