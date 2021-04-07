(() => {
  interface IbaseCRUD <T> {
    data: T[]
    add: (t: T) => void
    getById: (id: number) => T
  }
  
  class User {
    id?: number; //id主键自增
    name: string; //姓名
    age: number; //年龄
  
    constructor (name, age) {
      this.name = name
      this.age = age
    }
  }
  
  class UserCRUD implements IbaseCRUD <User> {
    data: User[] = []
    
    add(user: User): void {
      user = {...user, id: Date.now()}
      this.data.push(user)
      console.log('保存user', user.id)
    }
  
    getById(id: number): User {
      return this.data.find(item => item.id===id)
    }
  }
  
  
  const userCRUD = new UserCRUD()
  userCRUD.add(new User('tom', 12))
  userCRUD.add(new User('tom2', 13))
  console.log(userCRUD.data)
  /***
   * 泛型类
   */
  //在定义类时, 为类中的属性或方法定义泛型类型 在创建类的实例时, 再指定特定的泛型类型
  class GenericNumber<T> {
    zeroValue: T | undefined
    add: ((x: T, y: T) => T) | undefined
  }
  
  let myGenericNumber = new GenericNumber<number>()
  myGenericNumber.zeroValue = 0
  myGenericNumber.add = function(x, y) {
    return x + y 
  }
  
  let myGenericString = new GenericNumber<string>()
  myGenericString.zeroValue = 'abc'
  myGenericString.add = function(x, y) { 
    return x + y
  }
  
  console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
  console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12))
  /**
   * 泛型约束
   */
   interface Lengthwise {
    length: number;
  }
  
  // 指定泛型约束
  function fn2 <T extends Lengthwise>(x: T): void {
    console.log(x.length)
  }
  fn2('abc')
// fn2(123) // error  number没有length属性
})()