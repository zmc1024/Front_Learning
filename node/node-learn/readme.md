# node.js 是一个基于 chrome V8引擎的一个 js 的运行环境
# node.js 使用一个事件驱动，非阻塞式的IO模型，轻量且高效


# commonJS(模块化思想)   ESCMScript

# npm

# node.js 内置模块

# 非阻塞式的IO模型

# express 和 koa 的区别


# RPC (Remote Procedure Call (远程过程调用))

和 Ajax 有什么相同点？
1. 都是两个计算机之间的通信
2. 都需要双方约定一个数据格式

和 Ajax 有什么不同点？
1. ajax要使用DNS寻址服务，RPC不一定使用DNS作寻址服务
2. 应用层协议一般不使用HTTP
3. 基于TCP或UDP协议


- 寻址/负载均衡
  - ajax：使用DNS寻址
  - RPC：使用特有服务寻址

- TCP通信
  * Ajax：单共通信  (只能客向服通信  或  服向客通信)
  * RPC：多种形式(半双工/全双工通信...) 半双工不支持高并发

- 二进制协议
  * Ajax：HTTP(html, json)
  * RPC：二进制协议(更小的数据包体积，更快的编码速率)


# RPC调用：Buffer编码解码二进制数据包
    00 00 00        0000          0000
  write(x, 0)   write(x, 3)   write(x, 5)

  protocol    buffer


# RPC调用：net建立多路复用的RPC通道
