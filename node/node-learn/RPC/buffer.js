// 生成 buffer对象
/**
const buffer1 = Buffer.from('wn')
const buffer2 = Buffer.from([1, 2, 3, 4])

const buffer3 = Buffer.alloc(20)  //声明对象长度

console.log(buffer1);
console.log(buffer2);
console.log(buffer3);

buffer2.writeInt8(12, 1)
// console.log(buffer2);
buffer2.writeInt16BE(512, 2)
console.log(buffer2);
 */


// 文件编码解码 buffer流
const fs = require('fs')
const protobuf = require('protocol-buffers')
const schema = protobuf(fs.readFileSync(__dirname + '/buffer.proto', 'utf-8'))

console.log(schema);

const buffer = schema.Clomn.encode({  //编码
  id: 1,
  name: 'Node.js',
  price: 80.4
})

console.log(schema.Clomn.decode(buffer)); //解码
