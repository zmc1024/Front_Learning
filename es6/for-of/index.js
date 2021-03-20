let arr = ['a','b','c','d','e']

// 可以操作下标
for(let i = 0;i<arr.length;i++){
  // console.log(arr[i]);
}
// 没有下标，不能操作下标  
// for-of可遍历数组。不能遍历对象，因为对象没有迭代器
for(let i of arr){
  // console.log(i);
}
  
let obj = {
  name: 'zhangsan',
  sex: 'man',
  age: 18
}
obj.height = 180
// for-in 可遍历对象，可遍历数组(但不建议使用，会把数组原型上的属性和方法遍历出来)
for(let key in obj){
  // console.log(key);
  // console.log(obj[key]);
}


function foo(){
  this[100] = 'test-100'
  this[1] = 'test-1'
  this['b'] = 'bar-B'
  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
  this['A'] = 'bar-A'
  this['C'] = 'bar-C'
}
let bar = new foo()
// console.log(bar);
for(let key in bar){
  console.log(`key:${key} value:${bar[key]}`);
}

// Js 遵从 ECMAScript标准
// 数组属性按照索引值的大小升序排列，字符串会按照出现的顺序排列