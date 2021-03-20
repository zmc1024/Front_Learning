// 数组扁平：多维数组变成一维数组

// let arr = [1, [2, [3, 4]]]

// function faltten(arr) {
//   let result = []
//   for (let i = 0, len = arr.length; i < len; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(faltten(arr[i]))
//     } else {
//       result.push(arr[i])
//     }
//   }
//   return result
// }
// console.log(faltten(arr)); // [1, 2, 3, 4]

// console.log(arr.toString());


// reduce
// function faltten(arr) {
//   return arr.reduce(function(prev, next) {
//     return prev.concat(Array.isArray(next) ? faltten(next) : next)
//   }, [])
// }




let arr = [1, [2, [3, 4]]] // 1, [2, [3, 4]]
function faltten(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(faltten(arr)); // 1, 2, [3, 4]

