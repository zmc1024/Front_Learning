// es6
// function a(){ 
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve('ok')
//       console.log('aaa');
//     },1000)
//   })
// }

// function b(){
//   console.log('bbbb');
// }

// a().then(b)



// es7
function timeOut(ms){
  return new Promise(resolve => {
    setTimeout(()=>{
      console.log('你好');
      resolve()
    },ms)
  })
}

// async：声明该函数内部可能存在异步的情况
async function asyncPrint(value,ms){
  await timeOut(ms)       // 阻塞后面的代码，要先执行
  console.log(value);     // 去到微任务队列
}

asyncPrint('hello world',1000)
console.log('ok');
