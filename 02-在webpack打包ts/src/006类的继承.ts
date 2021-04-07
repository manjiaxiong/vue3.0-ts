(() => {
  //继承 
  /* 
类的继承
*/

class Animal {
  run (distance: number) {
    console.log(`Animal run ${distance}m`)
  }
}

class Dog extends Animal {
  cry () {
    console.log('wang! wang!')
  }
}

const dog = new Dog()
dog.cry() 
  dog.run(100) // 可以调用从父中继承得到的方法
//   这个例子展示了最基本的继承：类从基类中继承了属性和方法。 这里，Dog 是一个 派生类，它派生自 Animal 基类，通过 extends 关键字。 派生类通常被称作子类，基类通常被称作超类。
// 因为 Dog 继承了 Animal 的功能，因此我们可以创建一个 Dog 的实例，它能够 cry() 和 run()。
})()