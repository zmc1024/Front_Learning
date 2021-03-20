
function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaaa');
      resolve()
    },1000)
  })
}

function b() {
  setTimeout(() => {
    console.log('bbbb');
  },500)
}

function c() {
  setTimeout(() => {
    console.log('cccc');
  },100)
}

a().then(() => {
  b()
}).then(() => {
  c()
})