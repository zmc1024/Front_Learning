const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

// ctx：是koa的上下文，包括koa中请求和响应的所有方法
const main = ctx => {
    ctx.response.type = 'html'
    // 读取文件并转为文件流，并且响应给ctx
    ctx.response.body = fs.createReadStream('./template.html') 
}

app.use(main)

// 启动一个 3000 端口的服务
app.listen(3000, () => {
    console.log('3000端口已启动');
})