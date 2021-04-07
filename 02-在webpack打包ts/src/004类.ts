(() => {
  //定义一个类
  //接口对接口叫继承 接口对类叫实现
  interface IFly{
    fly():void
  }
  class Person1 implements IFly{
    fly():void{
      console.log('我会飞1');
    }
  }
  interface ISwim{
    swim():void
  }
  const person1 = new Person1()
  person1.fly()
  //注 类可以实现一个接口也可以实现多个接口 接口中的内容都要类去真正实现
  class Person2 implements IFly, ISwim{
    fly():void{
      console.log('我会飞2');
    }
    swim():void{
      console.log('我游泳2');
    }
  }
  const person2 = new Person2()
  person2.fly()
  person2.swim()
  interface IFlyAndSwim extends IFly, ISwim{
    
  }
  class Person3 implements IFlyAndSwim{
    fly():void{
      console.log('我会飞3');
    }
    swim():void{
      console.log('我游泳3');
    }
  }
  const person3 = new Person3()
  person3.fly()
  person3.swim()
  //总结 继承用extends 实现用implements
})()