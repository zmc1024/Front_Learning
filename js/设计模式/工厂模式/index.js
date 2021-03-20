// const ceo = {
//   name: 'ceo',
//   age: 20,
//   carrer: 'coder'
// }
// const ceo = {
//   name: 'jiushen',
//   age: 18,
//   carrer: 'coder'
// }


// 构造器模式：通过定义构造函数来生产对象
function User(name, age, carrer, work) {
  this.name = name
  this.age = age
  this.carrer = carrer
  this.work = work
}
// const user = new User(name, age, carrer)


function Coder(name, age) {
  this.name = name
  this.age = age
  this.carrer = 'coder'
  this.work = ['写代码', '写系分', '改Bug']
}
function ProductManager(name, age) {
  this.name = name
  this.age = age
  this.carrer = 'product-manager'
  this.work = ['订会议室', '写PRD', '催更']
}

function Factory(name, age, carrer) {
  let work;
  switch(carrer) {
    case 'coder': 
      work = ['写代码', '写系分', '改Bug']
      break
    case 'product-manager':
      work = ['订会议室', '写PRD', '催更']
      break
    case 'boss':
      work = ['喝茶', '看报', '见客户']
      break
    // ...
  }
  return new User(name, age, carrer, work)
}