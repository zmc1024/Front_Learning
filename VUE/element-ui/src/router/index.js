import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
import home from '../views/home'
import userInfo from '@/views/userInfo'
import Form from '@/views/Form'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'userInfo',
          name: 'userInfo',
          component: userInfo
        },
        {
          path: 'Form',
          name: 'Form',
          component: Form
        }
      ]
    }
  ]
})