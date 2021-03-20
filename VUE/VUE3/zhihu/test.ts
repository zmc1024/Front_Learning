// let arr:number[] = [1, 2, 3, 4]

// let tuple:[string, number] = ['wn', 20]

// interface Person {
//   readonly id?: number,
//   name: string,
//   age: number,
//   isShuai?: true,
// }

// let wn:Person = {
//   name: 'wn',
//   age: 18
// }
// wn.isShuai = true
// wn.id = 123

// function add(x:number, y:number, z?:number):number {
//   return x + y
// }
// const add2: (x:number, y:number, z?:number) => number = add

// const sum = (x:number, y:number) => {
//   return x + y
// }
// interface ISum {
//   (x:number, y:number): number
// }
// const sum2: ISum = sum


// 联合类型
// let numberOrString: number | string
// numberOrString.toString()


// 类型断言
// function getLength(input: string | number):number {
//   const str = input as string
//   if(str.length) {
//     return str.length
//   } else {
//     const number = input as number
//     return number.toString().length
//   }
// }


// 类型守卫
// function getLength2(input: string | number):number {
//   if(typeof input === 'string') {
//     return input.length
//   } else {
//     return input.toString().length
//   }
// }


// class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name
//   }
//   run() {
//     return `${this.name} is running`
//   }
// }

// const cat = new Animal('lily')

// class Dog extends Animal {
//   bark() {
//     return `${this.name} is bark`
//   }
// }

// const xiaobai = new Dog('xiaobai');
// console.log(xiaobai.run());

// class Cat extends Animal {
//   constructor(name) {
//     super(name)
//   }
//   run() {
//     return 'meow,' + super.run()
//   }
// }

// const maomao = new Cat('maomao')
// console.log(maomao.run());


// interface Radio {
//   switchRadio(trigger: boolean):void
// }
// class Car implements Radio {
//   switchRadio(trigger) {
//     return 123
//   }
// }


// 枚举
enum Direction {
  Up,
  Down,
  Left,
  Right
}
console.log(Direction.Up);
console.log(Direction[0]);

// 泛型：指在定义函数接口或类的时候，不预先指定具体的类型，而在使用的时候再指定
// function echo(arg) {
//   return arg
// }
// const result = echo(123)

function echo<T>(arg: T):T {
  return arg
}
const result = echo(123)

function swap<T, U>(tuple: [T, U]):[U, T] {
  return [tuple[1], tuple[0]]
}


