var person = {
  name: '早雨',
  age: '18',
  sex: 'woman',
  drink: function() {
    console.log('喝酒');
    person.health++
  },
  smoke: function(){
    console.log('抽烟');
    person.health--
  },
  health: 100
}

// person.health++

person.smoke()
person.drink()

person.boyfriend = 'mrZMC'
// console.log(person);

// 删除
delete person.age
console.log(person);


//对象的创建
// var obj = {}
// 构造函数
    // 系统自带的构造函数 Object()
    // 自定义


function Car(color){
  this.name = 'BMW',
  this.height = '1400',
  this.long = '4900',
  this.weight = '1000',

  this.health = 100
  this.run = function(){
    this.health--
  }
  this.color = color
}
var car = new Car('green')
var car1 = new Car('white')
car.name = '红旗'
car1.name = '比亚迪'

car.run()
console.log(car1);