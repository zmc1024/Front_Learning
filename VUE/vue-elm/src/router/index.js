import Vue from 'vue'
import VueRouter from 'vue-router'

import goods from '../views/goods/goods.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'goods',
    component: goods
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('../views/comment/comment.vue')     //路由按需加载
  },
  {
    path: '/seller',
    name: 'seller',
    component: () => import('../views/seller/seller.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
