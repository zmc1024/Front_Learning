let foo = {
  value: 1,
  // getValue: function() {
  //   console.log(this.value)   //1
  // },

  // getValue: ()=> {  //箭头函数不用this指向
  //   console.log(foo.value)   //1
  // },

  getValue: ()=> {  //箭头函数没有this
    console.log(this);
    console.log(this.value)   //undefined
  }
}
// foo.getValue.bind/.call(foo) 指定this无用
foo.getValue()



function foo(){
  this.value = 1
}
Foo.prototype.getValue = () => console.log(this.value);
let foo = new Foo();
// let foo = {
//   value: 1,
//   getValue: function(){
//     console.log(this.value);
//   }
// }
foo.getValue();