import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import home1 from '../views/home1'
import home2 from '../views/home2'
import Detail from '@/views/Detail'

Vue.use(Router)

// Hash模式：路径有/#/ 是hash值
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/',
          name: 'Home',
          component: home1
        },
        {
          path: 'home1',
          component: home1
        },
        {
          path: 'home2',
          component: home2
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      // 路由钩子函数, to:要去的页面，from:来的页面，next:让去放行
      beforeEnter: (to, from, next)=>{
        console.log(to);
        console.log(from);
        next();
      }
    },
    {
      // path: '/detail:username',          // 路由传参第二种，path路径:带参
      path: '/detail',
      name: 'Detail',                       // 路由传参第一种，name可做参数使用
      component: Detail,
      // redirect: '/login',      //重定向到某个路由
      // alias: '/hello'          //路由别名
    }
  ]
})


// 路由模式：
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   }
// ]

// const router = new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,     //当前进程环境的基本路径
//   routes
// })

// export default router