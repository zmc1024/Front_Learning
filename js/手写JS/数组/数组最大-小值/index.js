// let array = [1, 2, 3, 2, 0, 5, '6', undefined]
// 有Bug，接收不了无法转换为Number类型的值
// console.log(Math.max(...array));
// console.log(Math.min(...array));

// console.log(Math.max(true, '2', null));
// console.log(Math.min(1, '0', {}));

// console.log(Math.min() > Math.max());
// console.log();


// 原始方法
let array = [1, 2, 3, 2, 0, 5, 8]
// function max(arr) {
//   let max = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   return max
// }


// reduce
function max(prev, next) {
  return Math.max(prev, next)
}

console.log(array.reduce(max));


// 排序
array.sort(function(a, b) {
  return b - a
})
console.log(array[0]);


// eval
let max = eval("Math.max(" + array + ")")

// apply
Math.max.apply(null, array)
  