// 石头剪刀布游戏

// console.log(process.argv);

// 获取用户输入的结果
// var playerAction = process.argv[process.argv.length - 1]
// console.log(playerAction);

module.exports = function(playerAction) {
  // 电脑随机生成3个
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
    return 0
    // console.log('平局');
  }else if((computerAction === 'rock' && playerAction === 'paper') || (computerAction === 'scissor' && playerAction === 'rock') || (computerAction === 'paper' && playerAction === 'scissor')){
    return 1
    // console.log('用户赢');
  }else{
    return 2
    // console.log('电脑赢，你输了');
  }
}