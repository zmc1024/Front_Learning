// let a = 1
// let b = 2
// let c = 3

// let [a,b,c] = [1,2,3]
// let [a,[b,c]] = [1,[2,3]]

// let [,,c] = [1,2,3]

// let [a,b,...c] = [1,2,3,4,5,6,7,8]
// let [a,b,...c] = [1]


//Set
// let arr = [1,2,3,2,4,4,56]
// let newArr = new Set(arr)
// console.log(newArr);

// let [x,y,z] = new Set(['a','b','c'])
// console.log(x);

// let [foo = true] = [false]
// console.log(foo);  //false

// let [x,y='b'] = ['a',undefined]
// console.log(y);   //b

// let {x,y} = {x:'aaa',y:'bbb'}
// console.log(x);

// let {foo:baz} = {foo:'aaa',bar:'bbb'}
// console.log(baz);

// let obj = {
//   p:['hello',{y:'world'}]
// }
// let {p:[x,{y}]} = obj
// console.log(x+y);


const [a,b,c,d,e] = 'hello'
console.log(c);
