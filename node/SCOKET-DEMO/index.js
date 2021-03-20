const http = require('http')    //http请求
const fs = require('fs')    //读取系统文件
// const { info } = require('console')
const {socket} = require('socket.io')

// 搭建一个web服务
var server = http.createServer(function(req,res){
  if(req.url !== '/favicon.ico'){
    res.writeHead(200,{"Content-type": "text/html"})
    // 创建一个文件流  fs.createReadStream:读取文件  __dirname:获取当前文件目录的绝对路径
    const myreadstream = fs.createReadStream(__dirname + '/views/http_demo.html', 'utf-8')  
    myreadstream.pipe(res)  // 往前端输出文件流
  }
})

var io = require('socket.io')(server)
io.on('connection',function(socket){    //声明一个io的使用
  console.info('一个socket连接成功了')
  socket.on('link_to_server', (msg)=>{    //服务端接收客户端发送的消息
    console.info(`我收到一个问题 ${msg}`)
    io.emit('link_to_client', msg)   //服务端响应客户端
  })
})

server.listen(8888,()=>{    //监听一个端口
  console.log('server is running...');
})     