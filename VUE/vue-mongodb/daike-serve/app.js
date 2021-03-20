const Koa = require('koa')
var cors = require('koa2-cors');              //解决跨域
var bodyParser = require('koa-bodyparser');   //帮助解析参数
const app = new Koa()
const mongoose = require('mongoose')    //连接数据库
const config = require('./config')

// 建立mongodb的连接
mongoose.connect(config.db, {
  useNewUrlParser: true
}, (err) => {
  if(err) {
    console.error('failed')
  }else{
    console.log('连接数据库成功');
  }
})

app.use(cors());        //解决跨域
app.use(bodyParser());  //帮助koa解析参数

// app.use((ctx) => {
//   ctx.body = 'hello'
// })

const user_router = require('./routes/api/user_router')
app.use(user_router.routes())

app.listen(3000)