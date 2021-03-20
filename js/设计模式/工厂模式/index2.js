// ---------软件类---------
class OS {
  controHardWare() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写')
  }
}
class AndroidOS extends OS {
  controHardWare() {
    console.log('我会用安卓的方式去操作硬件');
  }
}
class AppleOS extends OS {
  controHardWare() {
    console.log('我会用苹果的方式去操作硬件');
  }
}

// ---------硬件类---------
class HardWare {
  controHardWare() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写')
  }
}
class QualcommHardWare extends HardWare {
  controHardWare() {
    console.log('我会以高通的方式去运转');
  }
}
class HuaweiHardWare extends HardWare {
  controHardWare() {
    console.log('我会以华为的方式去运转');
  }
}


class FakeStar extends MobilePhoneFactory {
  // 提供操作系统
  createOS() {
    // throw new Error('抽象工厂方法不允许直接调用，你需要将我重写')
    return new AndroidOS()
  }

  // 提供硬件
  createHardWare() {
    // throw new Error('抽象工厂方法不允许直接调用，你需要将我重写')
    return new QualcommHardWare()
  }
}

const myPhone = new FakeStar()
const myOS = myPhone.createOS()
const myHardWare = myPhone.createHardWare()
myOS.controHardWare()
myHardWare.controHardWare()

class newStarFactory extends MobilePhoneFactory {

}