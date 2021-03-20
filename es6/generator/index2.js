let fetch = require('node-fetch')

function* gen() {
  let r1 = yield fetch('https://api.github.com/users/github');
  let r2 = yield fetch('https://api.github.com/users/github/followers');
  let r3 = yield fetch('https://api.github.com/users/github/repos');
  
  console.log([r1.bio, r2.documentation_url, r3.message].join('\n')); //join()与...拼凑在一起
}

// let g = gen()
// // console.log(g);   //Object [Generator] {}
// let result1 = g.next()
// // console.log(result1);     //{ value: Promise { <pending> }, done: false }
// result1.value.then(function(data) {
//   // console.log(data);     //第一个fetch请求的数据
//   return data.json()
// }).then(function(data) {
//   // console.log(g.next(data).value);
//   return g.next(data).value
// }).then(function(data) {
//   return data.json()
// }).then(function(data) {
//   // console.log(g.next(data).value);
//   return g.next(data).value
// }).then(function(data) {
//   return data.json()
// }).then(function(data) {
//   g.next(data)
// })

function run(gen) {
  let g = gen()
  function next(data) {
    let result = g.next(data)

    if(result.done) return

    result.value.then(function(data) {
      return data.json()
    }).then(function(data) {
      next(data)
    })
  }
  next()
}
run(gen)