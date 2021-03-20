// 启动一个web服务
const Koa = require('koa')
const path = require('path')  //读取文件,node自带
const config = require('./config/default.js')
const session = require('koa-session-minimal')  //数据库的操作,缓存
const MysqlStore = require('koa-mysql-session') //数据库的操作
const bodyParser = require('koa-bodyparser')    //表单解析
const staticCache = require('koa-static-cache') //配置静态资源
const views = require('koa-views')  //读取koa的模板文件
const app = new Koa();

// session存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST
}

// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))

// 缓存
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))

// 配置服务端的模板引擎中间件
app.use(views(path.join(__dirname, './views'), {  //path.join():拿到项目文件的根路径
  extension: 'ejs'
}))   

app.use(bodyParser({
  formLimit: '1mb'    //表单大小限制
}))

// .routes() 读取 router 的上下文
app.use(require('./routers/signin.js').routes())
app.use(require('./routers/signup.js').routes())

// ctx即上下文即Koa本身
// app.use((ctx) => {
//   ctx.body = router
// })

app.listen(config.port,() => {
  console.log('3000端口已启动');
})

