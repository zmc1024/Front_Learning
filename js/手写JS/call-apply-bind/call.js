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
// a.call(b, 1, 2)

// Function.prototype.mycall = function(thisArg){    //不是声明一个方法，是在Function原型里加个属性
//   if(typeof this !== 'function'){
//     throw new TypeError('Error')
//   }
//   // 让this代表的这个函数去到thisArg里面生效
//   const fn = Symbol('fn')     //Symbol：es6原始数据类型，保证定义的变量是唯一的。防止fn这个单词被占用
//   // 把this代表的这个函数所拥有的参数先取到
//   const args = [...arguments].slice(1);    //arguments全部结构出来 ['b','1','2']    .slice数组方法
//   thisArg = thisArg || window

//   // 将调用call函数的方法添加到thisArg的属性中
//   thisArg[fn] = this
//   const result = thisArg[fn](...args)
//   delete thisArg[fn];     //移除添加的属性fn
//   return result
// }

Function.prototype.mycall = function(thisArgs) {
  if(typeof this !== 'function') {
    return new TypeError('Error')
  }

  thisArgs = thisArgs || window;    // 不传参数的话：默认指向window;
  const args = [...arguments].slice(1)
  const fn = Symbol('fn')

  thisArgs[fn] = this     // 将调用call函数的方法添加到thisArg的属性中
  const result = thisArgs[fn](...args)
  delete thisArgs[fn]
  return result
}

a.mycall(b, 2, 2)