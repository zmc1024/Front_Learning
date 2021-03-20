import apiLogin from './interface/login'

// login函数挂载到vue原型上去
const install = Vue => {
  // 对象拦截
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return Object.assign(
          {},
          apiLogin,
          // ...
        )
      }
    }
  })
}

export default install