(() => {
/* 
静态属性, 是类对象的属性
非静态属性, 是类的实例对象的属性
只能通过类调用和获取 不能通过实例来调用或获取
*/

class Person {
  name1: string = 'A'
  static name2: string = 'B'
}

console.log(Person.name2='sdfsdf')
console.log(new Person().name1)
})()