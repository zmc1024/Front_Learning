const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

const main = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./template.html') 
}

app.use(main)

// 启动一个 3000 端口的服务
app.listen(3000, () => {
    console.log('3000端口已启动');
})