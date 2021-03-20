function myPerson(name,age){
  this.name = name
  this.age = age
}
var person1 = myPerson()


function Car(color){
  this.color = color
  this.name = 'BMW'
  // return 123           return 原始值不影响 new 对象
  return function(){}     // return 引用类型会干扰 new 对象
}
var car = new Car('red')
console.log(car);