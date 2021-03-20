// Js是单线程语言

function a(){
  setTimeout(()=>{
    console.log('蜗牛');
  },1000)
}

function b(){
  console.log('憨憨');
}

function c(){
  console.log('早雨');
}

c()
a()
b()