let Vue = null;
class HistoryRoute {
  constructor () {
    this.current = null
  }
}
class VueRouter {
  // 类里添加属性
  constructor (options) {
    this.mode = options.mode || 'hash'
    this.routes = options.routes || []
    this.routesMap = this.createMap(this.routes)

    this.history = new HistoryRoute() // 装当前路由的状态
    this.init()
  }
  // 初始化
  init() {
    if (this.mode === 'hash') {
      location.hash ? '' : location.hash = '/';
      window.addEventListener('load', () => {
        this.history.current = location.hash.slice(1)
      })
      window.addEventListener('hashchange', () => {
        this.history.current = location.hash.slice(1)
      })
    } else {
      location.pathname ? '' : location.pathname = '/';
      window.addEventListener('load', () => {
        this.history.current = location.pathname
      })
      window.addEventListener('popstate', () => {
        this.history.current = location.pathname
      })
    }
  }
  createMap(routes) {
    return routes.reduce((pre, current) => {
      pre[current.path] = current.component  // { '/home': Home }
      return pre
    }, {})
  }
}
VueRouter.install = function(v) {
  Vue = v;
  Vue.mixin({   //全局混入,将mixin的内容混入到vue的初始参数
    beforeCreate() {
      // vue.$options 用于当前 Vue 实例的初始化选项
      if (this.$options && this.$options.router) { // 如果是根组件
        this._root = this
        this._router = this.$options.router
        // 做响应式操作
        Vue.util.defineReactive(this, 'xxx', this._router.history)
      } else { // 如果是子组件
        this._root = this.$parent && this.$parent._root   //$parent:父实例,根组件
      }
      Object.defineProperty(this, '$router', {    //对象拦截(拦截的对象，拦截对象的属性)
        get () {
          return this._root._router
        }
      })
      Object.defineProperty(this, '$route', { 
        get () {
          return this._root._router.history.current
        }
      })
    }
  })
  Vue.component('router-link', {
    props: {
      to: String
    },
    render(h) {
      let mode = this._self._root._router.mode
      let to = mode === 'hash' ? '#' + this.to: this.to
      // 渲染函数(要渲染的xx，往里添加属性，渲染的内容)
      return h('a', {attrs: {href: to}}, this.$slots.default)
    }
  })
  Vue.component('router-view', {
    render(h) {
      let current = this._self._root._router.history.current
      let routeMap = this._self._root._router.routesMap
      return h(routeMap[current])
    }
  })
}

export default VueRouter



// Vue.use: 
// 1.为什么vue组件不会二次加载
// 2.vue.use做了什么
// class Vue {
//   constructor() {
//     _installedPlugins: ''
//   }
// }
// Vue.use = function(plugin) {
//   const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
//   if(installedPlugins.indexOf(plugin) > -1) {
//     return this
//   }
//   const args = toArray(arguments, 1)
//   args.unshift(this)
//   if(typeof plugin.install === 'function') {
//     plugin.install.apply(plugin, args)
//   } else if(typeof plugin === 'function') {
//     plugin.apply(null, plugin, args)
//   }
//   installedPlugins.push(plugin)
//   return this
// }
