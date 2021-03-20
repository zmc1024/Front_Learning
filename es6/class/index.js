
class Foo{
  constructor(){}

  // static声明的方法只能被Foo调用，不能被继承
  static bar(){
    this.baz()
  }
  // static baz(){
  //   console.log('hello');
  // }
  baz(){
    console.log('world');
  }
}
let foo = new Foo();
foo.baz()


/*
class Shape{
  constructor(width,height){
    this._width = width;
    this._height = height;
    // this.area = width * height;
  }

  // 方法体前加个 get，方法会自动执行不需要调用area()
  get area(){
    return this._width * this._height;
  }
}
const square = new Shape(10,10)
console.log(square.area);
*/