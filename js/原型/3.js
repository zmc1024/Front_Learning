Person.prototype.lastName = 'Liu'

function Person(name) {
    this.name = name
}

var person = new Person('zhipeng')

person.lastName = 'Wang' //没有改动原型属性，只是在自己的对象中添加了lastName属性
console.log(person.lastName);
console.log(person);

// delete person.lastName
// console.log(person.lastName);

// Car.prototype = {
//     constructor: Bus
// }
function Car() {

}
var car = new Car()

console.log(Car.prototype); //function Car() {}
// constructor指向的是Car(),目的是让Car()构造出来的对象想要找到自己的来历时能找到
// car.constructor
console.log(Car.constructor); 
