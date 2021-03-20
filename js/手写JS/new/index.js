Person.prototype.say = function(){
  console.log('hahaha');
}

function Person(name,age){
  this.name = name;
  this.age = age;
  // return {}      // return返回对象以返回的对象为准，基本数据类型不受影响
}
// let person = new Person("早雨","18");
// console.log(person);    //Person { name: '早雨', age: '18' }
// 原型上的属性在对象原型上_proto_，不会直接显示出来，构造函数上的属性才会直接显示出来
// console.log(person.say());

function myNew(){
  let obj = {}
  // 取到外部传入的构造器
  // 取到外部传入的所有参数，arguments是一个类数组  法一：转成数组Array.from()
  let Constructor = Array.prototype.shift.call(arguments);    //数组原型上的shift方法去到arguments生效  借一个方法
  
  obj.__proto__ = Constructor.prototype;    // 实现继承(显示属性赋给隐式属性)

  let result = Constructor.apply(obj, arguments);   //构造函数上的属性去到obj上

  return typeof result === 'object' ? result : obj
}
let person = myNew(Person,'早雨',18);
console.log(person);
person.say();