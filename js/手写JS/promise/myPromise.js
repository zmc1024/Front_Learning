const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this
  that.state = PENDING
  that.value = null
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []

  function resolve(value) {
    if(that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.map(cb => {
        cb(that.value)
      })
    }
  }
  
  function reject(value) {
    if(that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallbacks.map(cb => {
        cb(that.value)
      })
    }
  }

  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

MyPromise.prototype.then = function(onFullfilled, onRejected) {
  const that = this
  onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }

  if(that.state === PENDING) {
    that.resolvedCallbacks.push(onFullfilled)
  }
  if(that.state === RESOLVED) {
    onFullfilled(that.value)
  }
  if(that.state === REJECTED) {
    onRejected(that.value)
  }
}

MyPromise.prototype.catch = function(onRejected) {
  const that = this
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }

  if(that.state === PENDING) {
    that.rejectedCallbacks.push(onRejected)
  }
  if(that.state === REJECTED) {
    onRejected(that.value)
  }
}

function a() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaaa');
      resolve('err')
    },1000)
  })
}
function b() {
  console.log('bbbb');
}

a().then(b)
