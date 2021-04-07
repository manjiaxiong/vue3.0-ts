(() => {
  // 抽象类做为其它派生类的基类使用。 它们不能被实例化。不同于接口，抽象类可以包含成员的实现细节。
  // abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。
  
abstract class Animal {

  abstract cry ():any//这里用了抽象所以里面不能写具体内容

  run () {
    console.log('run()')
  }
}

class Dog extends Animal {
  cry () {//重写基类的抽象方法
    console.log(' Dog cry()')
  }
}

const dog = new Dog()
dog.cry()
dog.run()
})()