// 防抖：在一定时间内，如果持续请求，就一直不执行，在规定的时间内没有第二次操作，才执行

// 防抖函数
function debounce(fn, delay){
  let timer = null;

  return function(){
    let context = this;
    let arg = arguments
    clearTimeout(timer)     //清除上一次的定时器
    timer = setTimeout(() => {    //箭头函数不会干扰this，()=>{}源码没有this
      fn.apply(context,arg)   //让this不被更改
      console.log(context);
    },delay)
  }
}

