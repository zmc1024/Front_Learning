// Promise.prototype.then = function(){}
// Promise.prototype.catch = function(){}

// class Promise{
//   constructor(){

//   }

//   all(){

//   }

//   race(){

//   }
// }


function xq(){
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      console.log('早雨相亲!!!');
      resolve('成功')
      // reject('你太丑')
    },1000)
  })
}

function marry(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('结婚大吉!!!');
      resolve('洞房')
    },500)
  })
}

function baby(){
  console.log('小早雨出生');
}

// xq().then(marry)         让异步成链式的调用
xq()
  .then((res)=>{            //.then()执行只认resolve
    console.log(res);
    return marry()
  })
  .then((result)=>{
    console.log(result);
    baby()
  })
  // .catch((err)=>{           //.catch()执行只认reject
  //   console.log(err);
  // })