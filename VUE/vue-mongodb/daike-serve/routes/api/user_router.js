// 后端定义接口要使用路由
const Router = require('koa-router')
const router = new Router()
const user_controller = require('./../../app/controllers/user_controller')

// 定义一个 get 请求的接口
router.post('/login', user_controller.login)    // 拿到前端传过来的参数，去数据库里匹配是否存在

module.exports = router