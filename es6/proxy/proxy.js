// -----------------------------------demo1
// let proxy = new Proxy({}, {
//   get: function(obj, prop) {
//     console.log('get操作');
//     return obj[prop]
//   },
//   set: function(obj, prop, value) {
//     console.log('set操作');
//     obj[prop] = value
//   }
// })

// proxy.time = 35
// console.log(proxy.time);


// -----------------------------------demo2
// let handler = {
//   // 隐藏对象的属性，不会被for-in遍历
//   has(target, key) {
//     if(key[0] === '_') {
//       return false
//     }
//     return key in target
//   }
// }

// let target = {_prop: 'foo', prop: 'bar'}
// let proxy = new Proxy(target, handler)
// console.log('_prop' in proxy);
// console.log('prop' in proxy);


// -----------------------------------demo3
// let target = function() {
//   return 'i am the target'
// }
// let handler = {
//   apply: function() {
//     return 'i am the proxy'
//   }
// }
// let p = new Proxy(target, handler)
// console.log(p());


// -----------------------------------demo4
let target = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
}
let handler = {
  // 返回目标对象所有自身的属性的属性名
  ownKeys(target) {
    // filter过滤器：接收回调函数
    return Reflect.ownKeys(target).filter(key => key[0] !== '_')
  }
}
let proxy = new Proxy(target, handler)
console.log(proxy);
for(let key of Object.keys(proxy)) {
  console.log(target[key]);
}
