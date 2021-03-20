// 类包装
// 原始值是不能有属性和方法的，属性和方法是对象独有的

// var num = 123
// num.abc = 'aaa'

var num = new Number(123)
num.abc = '123'
console.log(num * 2);   //246

var arr = [1,2,3,4]
arr.length = 2
console.log(arr);       //2

var str = 'abcd'
str.length = 2
// new String('abcd').length = 2
// delete str.length
console.log(str);       //abcd


// 面试题：
var str = 'abc'
str += 1    //abc1
var test = typeof(str)
console.log(test);
if(test.length == 6){
  test.sign = 'typeOf的返回结果可能是String'
}
console.log(test.sign);