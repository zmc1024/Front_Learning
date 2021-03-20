const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

const main = (ctx, next) => {
  // console.log(ctx);
  ctx.body = 'hello'
}

// 使用koa路由创建一个路径
app.use(route.get('/abc', main))

app.listen(3000)
