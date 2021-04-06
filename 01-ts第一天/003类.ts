/****
 * 接口:
 * 是一种能力 一种约束能力
 */
 (()=>{
  interface Iperson {
      firstName:string,
      lastName:string
  }
 /***
  * 定义一个类
  */
   class Person{
     //注这些属性要提前声明 不然会报错
    firstName:string
    lastName:string
     fullName: string
     constructor(firstName: string, lastName: string) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.fullName=this.firstName+this.lastName
     }
   }
   const person = new Person('诸葛', '孔明')
   console.log(person);
   function hellow(person:Iperson){
    return person.lastName+'_'+person.firstName  
   }
   console.log(hellow(person), person instanceof Person);
   
})()