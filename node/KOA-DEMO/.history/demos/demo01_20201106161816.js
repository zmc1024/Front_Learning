const Koa = require('koa')

const app = new Koa()

// 监听一个 3000 端口，启动服务
app.listen(3000, () => {
    console.log('success');
})
