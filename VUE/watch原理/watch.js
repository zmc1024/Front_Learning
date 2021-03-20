// 能独立监听某个数据的变化
// 提供可执行函数的场所

// 观察者模式
class watcher {
  constructor(opts) {
    this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {}
    this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {}
    for(let key in opts.data) {
      this.setData(key)
    }
  }

  getBaseType(target) {
    const typeStr = Object.prototype.toString.call(target)  //"[object object]"
    return typeStr.slice(8,-1)
  }

  setData(_key) {
    // 在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
    Object.defineProperty(this, _key, {   //Object.defineProperty(this) 把上下文指向当前对象
      get: function() {
        return this.$data[_key]
      },
      set: function(newVal) {
        const oldVal = this.$data[_key]
        if(newVal === oldVal) {
          return newVal
        }
        this.$data[_key] = newVal
        // 调用opts里面的watch里面的函数
        this.$watch[_key] && this.getBaseType(this.$watch[_key]) === 'Function' && (
          this.$watch[_key].call(this, newVal, oldVal)
        )
      }
    })
  }
}

let vm = new watcher({
  data: {
    a: 0,
    b: 'hello'
  },
  watch: {
    a(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }
})

setTimeout(() => {
  vm.a = 1
}, 1000)
