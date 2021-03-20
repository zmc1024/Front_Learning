// 模板拼接
/*
let example = 'Tom'
const foo = 'this is' + example;
const foo2 = `this id ${example}`;    //es6写法
console.log(foo2);
*/


// es6新增的数组的方法
let arr = ['a','b','c']

// console.log(Object.keys(arr));  //[ '0', '1', '2' ]
// let newArr = [...arr.keys()]  //解构和新方法
// console.log(newArr);  //[ 0, 1, 2 ]

// let iter = arr.entries()  //arr.entries:数组的迭代器
// for(let e of iter){
//   console.log(e);
// }
// console.log(iter);

// let eArr= arr.values()  //arr.values():取到数组中的元素值
// for(let e of eArr){
//   console.log(e);
// }

// function test(fruit){
//   const redFruit = ['apple','cherry','dragon fruit']
//   if(redFruit.includes(fruit)){    //includes():数组中包含...
//     console.log('red');
//   }
// }
// test('apple')

// let people = [
//   {name: '小陶',age: 20},
//   {name: '叶总',age: 18},
//   {name: '大陶',age: 23}
// ]
// function findFriends(people){
//   return people.name === '叶总';
// }
// console.log(people.find(findFriends));  //find会逐条遍历people，将其赋值给findFriends

let test = ['a','b','c','d']
function index(i){
  
}
console.log(test.findIndex());
