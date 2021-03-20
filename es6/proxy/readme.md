# defineProperty 和 proxy的区别
1.defineProperty：只能定义属性的读(get)和写(set)
  proxy可以定义更多的行为，比如：in,delete...
2.proxy可代理的数据类型不仅限于object，还可以代理数组，函数等

let proxy = new Proxy(target, handler)
  target：要拦截的目标对象
  handler：一个对象(用来定制拦截行为)
  