(() => {
  //你可以使用 readonly 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
  class Person {
    readonly name: string = 'abc'
    constructor(name: string) {//只读属性必须要在构造函数中初始化
      this.name = name
    }
  }
  
  let john = new Person('John')
  // john.name = 'peter' // error
  // 在上面的例子中，我们必须在 Person 类里定义一个只读成员 name 和一个参数为 name 的构造函数，并且立刻将 name 的值赋给 this.name，
  // 这种情况经常会遇到。 参数属性可以方便地让我们在一个地方定义并初始化一个成员。 下面的例子是对之前 Person 类的修改版，使用了参数属性：
  class Person2 {
    constructor(readonly name: string) {
      this.name=name//这一步可以省略 因为在构造函数中声明之后自动加上了这一步
    }
  }
  
  const p = new Person2('jack')
  console.log(p.name)
})()