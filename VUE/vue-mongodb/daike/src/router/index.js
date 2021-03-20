import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'  //重定向到登录页面
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
