//  抛出：
// exports.hello = 'world'
// exports.add = function(a,b){
//   return a+b
// }

// module.exports = function minus(a,b){
//   return a - b
// }

// setTimeout(()=>{
//   console.log(exports);
// },1000)


// 石头剪刀布游戏
// console.log(process.argv);
// 获取用户输入的结果
// var playerAction = process.argv[process.argv.length - 1]
// console.log(playerAction);

// 电脑随机生成3个
module.exports = function(playerAction){
  var random = Math.random() * 3
  if(random < 1){
    var computerAction = 'rock'
  }else if(random > 2){
    var computerAction = 'scissor'
  }else{
    var computerAction = 'paper'
  }

  // 进行比较
  if(computerAction === playerAction){
    console.log('平局');
    return 0
  }else if((computerAction === 'rock' && playerAction === 'paper') || (computerAction === 'scissor' && playerAction === 'rock') || (computerAction === 'paper' && playerAction === 'scissor')){
    console.log('用户赢');
    return -1
  }else{
    console.log('电脑赢，你输了');
    return 1
  }
}
