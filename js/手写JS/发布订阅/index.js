// Event-Bus
class EventEmiltter {
  constructor() {
    // 存储事件
    this.events = this.events || new Map()
    // {
    //   'ages': function fn() {}
    // }
  }

  // 监听事件
  addListener(type, fn) {
    if(!this.events.get(type)) {
      this.events.set(type, fn)
    }
  }

  // 触发(发布)事件
  emit(type) {
    let handle = this.events.get(type)
    handle.apply(this, [...arguments].slice(1))
  }
}

let emitter = new EventEmiltter()

emitter.addListener('ages', age => {
  console.log(age);
})

emitter.emit('ages', 18)

// this.$emit('handle')