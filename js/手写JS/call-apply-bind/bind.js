let b = {
  name: '早雨'
}
function a(e,r){
  console.log(e + r);
  console.log(this.name);
}

Function.prototype.myBind = function (context) {
  if(typeof this !== 'function') {
    throw new TypeError('Error');
  }

  context = context || window
  let _this = this
  // console.log(arguments);           // [Arguments] { '0': { name: '早雨' }, '1': 1, '2': 2 }
  // console.log([...arguments]);      // [ { name: '早雨' }, 1, 2 ]
  let args = [...arguments].slice(1)

  return function F() {
    // this = F.prototype
    if(this instanceof F) {   // 判断函数是否被new
      return new _this(...args, ...arguments)   // a自带的参数，是否有初始化参数
    }
    return _this.apply(context, args)
  }
}

// let res = a.bind(b,1,2)
let res = a.myBind(b,1,2)
res()

