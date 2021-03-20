// arr.concat()：浅拷贝，依据数据类型
// let arr = [{old: 'old'}, 1, true, null, undefined]
// let new_arr = arr.concat()
// arr[0].old = 'new'
// console.log(arr);
// console.log(new_arr);


// arr.slice()：浅拷贝，依据数据类型
// let arr = [{old: 'old'}, 1, true, null, undefined]
// let new_arr = arr.slice()
// arr[0].old = 'new'
// console.log(new_arr);


// 深拷贝：但无法识别undefined，并且无法拷贝函数
// let arr = [{old: 'old'}, 1, true, null, undefined]
// let new_arr = JSON.parse(JSON.stringify(arr))
// arr[0].old = 'new'
// console.log(new_arr);

let arr = [function() {console.log('a');}, {b:function() {console.log('b')}}]
let new_arr = JSON.parse(JSON.stringify(arr))
console.log(new_arr);