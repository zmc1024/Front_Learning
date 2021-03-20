// console.log('start require');
// // 引入其他JS文件
// require('./lib.js')
// console.log('end require');


// let lib = require('./lib.js')
// console.log(lib);

// // exports导出的引用跟index.js里面的引用是同一个对象
// lib.name = '蜗牛'

// 用户输入
// var playerAction = process.argv[process.argv.length - 1]
const game = require('./lib')

// const result = game(playerAction)
// console.log(result);


// 获取进程的标准输入
let count = 0
process.stdin.on('data', e=>{
  const playerAction = e.toString().trim()
  const result = game(playerAction)
  console.log(result);
  if(result == -1){
    count++
  }
  if(count === 3){
    console.log('你太厉害不和你玩了');
    // 结束进程
    process.exit()
  }
})
