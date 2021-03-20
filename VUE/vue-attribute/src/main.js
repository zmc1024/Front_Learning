import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.mixin({ // 代码混入，放在全部使用
  beforeUpdate () {
    console.log('数据发生变化!!!')
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
