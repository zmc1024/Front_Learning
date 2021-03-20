let fetch = require('node-fetch')

function* gen() {
  let url = 'https://api.github.com/users/github'
  let result = yield fetch(url)   //返回一个promise对象
  console.log(result.bio);
}

let g = gen()   //执行generator函数，拿到一个遍历器对象
let res = g.next()    //执行异步任务的第一阶段 fetch(url)
console.log(res);   //{ value: Promise { <pending> }, done: false }

res.value.then(function(data) {
  return data.json()
}).then(function(data) {  //执行console.log(result.bio);
  g.next(data)
})