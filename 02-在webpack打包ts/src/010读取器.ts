(() => {
  // 支持通过 getters/setters 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
  // 下面来看如何把一个简单的类改写成使用 get 和 set。 首先，我们从一个没有使用存取器的例子开始。

  class Person {
    firstName: string = 'A'
    lastName: string = 'B'
    get fullName () {
      return this.firstName + '-' + this.lastName
    }
    set fullName (value) {
      const names = value.split('-')
      this.firstName = names[0]
      this.lastName = names[1]
    }
  }
  
  const p = new Person()
  console.log(p.fullName)
  
  p.firstName = 'C'
  p.lastName =  'D'
  console.log(p.fullName)
  
  p.fullName = 'E-F'
  console.log(p.firstName, p.lastName)
})()