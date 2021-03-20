function fetchData(){}  //获取数据
// promise.then 和 async await的区别：
  // async await写法更加精简，且没有错误处理机制

// function fetch(){
//   return(
//     fetchData().then(()=>{
//       return 'done'
//     })
//   )
// }

// async function fetch(){
//   await fetchData()
//   return 'done'
// }


// function fetch(){
//   try {
//     fetchData().then(result => {
//       const data = JSON.parse(result)
//     }).catch(err => {
//       console.log(err);
//     })
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function fetch(){
//   try {
//     const data = JSON.parse(await fetchData())
//   } catch (error) {
//     console.log(error);
//   }
// }