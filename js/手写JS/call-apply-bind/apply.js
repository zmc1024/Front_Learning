// 改变this的指向，并返回函数的执行结果
let b = {
  name: '早雨'
  // fn: function(){
  //   console.log(this.name);
  // }
}
function a(e,r){
  console.log(e + r);
  console.log(this.name);
}

// a.apply(b, [1,2])


// Function.prototype.myApply = function(obj, arg){    //不是声明一个方法，是在Function原型里加个属性
//   if(typeof this !== 'function'){
//     throw new TypeError('Error')
//   }
//   const fn = Symbol('fn')
//   obj[fn] = this
//   const res = obj[fn](...arg)
//   delete obj[fn]
//   return res
// }
Function.prototype.myApply = function(thisArgs){    //不是声明一个方法，是在Function原型里加个属性
  if(typeof this !== 'function'){
    throw new TypeError('Error')
  }
  const args = arguments[1]
  console.log(args);

  const fn = Symbol('fn')
  thisArgs[fn] = this
  const res = thisArgs[fn](...args)
  delete thisArgs[fn]
  return res
}

a.myApply(b, [2, 2])