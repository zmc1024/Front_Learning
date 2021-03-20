let array = [1, 2, 3, 1, '1', '1']


// indexOf()：返回某个指定的字符串值在字符串中首次出现的位置。
// function unique(arr) {
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i]
//     if (res.indexOf(current) === -1) {
//       res.push(current)
//     }
//   }
//   return res
// }

// console.log(unique(array));



// 排序后去重
// concat() 方法用于连接两个或多个数组。
function unique(arr) {
  let res = [];
  let sortedArr = arr.concat().sort();
  let seen;
  for (let i = 0; i < sortedArr.length; i++) {
    // 如果是第一个元素或者相邻的元素不相同
    if (!i || seen !== sortedArr[i]) {
      res.push(sortedArr[i])
    }
    seen = sortedArr[i]
  }
  return res
}
console.log(unique(array));
