let obj = {}
Object.defineProperty(obj, 'num', {
  // 数据描述符
  value: 1,
  writable: true,
  
  enumerable: true,
  configurable: true,

  // 存取描述符
  // getter
  get: undefined,
  // setter
  set: function(val) {

  }
})

console.log(obj);