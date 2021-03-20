// 路由封装操作
const router = require('koa-router')();
const controller = require('../controller/c-signup.js')

// 浏览器请求路径时，返回一个模板响应(输出个页面)
router.get('/signup', async(ctx, next) => {
  await ctx.render('signup', {
    session: ctx.session
  })
})

// 点击注册按钮的响应事件
router.post('/signup',controller.postSignup)

module.exports = router
