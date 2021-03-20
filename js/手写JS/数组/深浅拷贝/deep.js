// 深拷贝：借用递归和基本数据类型赋值是深拷贝的原理
let deepCopy = function(obj) {
  if (typeof obj !== 'object') return;
  let newObj = obj instanceof Array ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnproperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}