const http = require('http')
const fs = require('fs')
const url = require('url')
const queryString = require('querystring')  // 解析url参数

const game = require('../game.js')

// 启动一个http服务
http.createServer(function(req, res) {
  const parsedUrl = url.parse(req.url)
  if(parsedUrl.pathname === '/favicon.ico') {
    res.writeHead(200)
    res.end()
    return
  }

  if(parsedUrl.pathname === '/game') {
    const query = queryString.parse(parsedUrl.query)  // 获取用户行为
    const playerAction = query.action
    
    const gameResult = game(playerAction)

    res.writeHead(200)
    if(gameResult == 0) {
      res.end('平局')
    } else if(gameResult == 1) {
      res.end('你赢了')
    } else {  
      res.end('你输了')
    }
  }
  
  if(parsedUrl.pathname === '/') {
    fs.createReadStream(__dirname + '/game.html').pipe(res)
  }
}).listen(3000)
