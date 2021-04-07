(() => {
   //类可以理解为一个模板 通过类可以实例化一个对象
  //面向对象的思想
  class Person{
    //定义属性
    name: string
    age: number
    sex: string
    constructor(name: string = '熊家满', age: number = 18, sex: string = '男') {
      this.name = name;
      this.age = age;
      this.sex = sex;
    }
    sayHellow(str: string='aaa') {
      console.log(`你好我叫${this.name},今年${this.age}岁,${this.sex}`,str);
      
    }
  }
  const person1 = new Person()
  person1.sayHellow()
})()