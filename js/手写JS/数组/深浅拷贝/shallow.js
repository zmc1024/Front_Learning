// 自定义浅拷贝方法(赋值操作 => 浅拷贝)
let shallowCopy = function(obj) {
  // 只拷贝对象
  if (typeof obj !== 'object') return;
  // 根据obj的类型判断是新建一个数组还是对象
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    // 判断 key 是否是 obj本身的
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

Object.prototype.abc = 123

