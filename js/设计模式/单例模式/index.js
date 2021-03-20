// 一个类仅有一个实例
class SingleDog {
  show() {
    console.log('我是一个单例对象');
  }
  // constructor() {
  //   this.instance = null
  // }
  
  static getInstance() {
    // 方式一：
    // if(!SingleDog.instance) {
    //   SingleDog.instance = new SingleDog()
    // }
    // return SingleDog.instance

    // 方式二：
    // let instance = null
    // return (function() {
    //   if(!instance) {
    //     instance = new SingleDog()
    //   }
    //   return instance
    // })()
    let instance = null
    if(!this.instance) {
      this.instance = new SingleDog();
    }
    return this.instance;
  }
}
const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()
console.log(s1 === s2);