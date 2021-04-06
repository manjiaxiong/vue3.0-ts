/****
 * 接口:
 * 是一种能力 一种约束能力
 */
 (()=>{
  interface Iperson {
      firstName:string,
      lastName:string
  }
  function hellow(person:Iperson){
    return person.lastName+'_'+person.firstName  
  }
  const person={
      lastName:'q2weq',
      firstName:'asdas'
  }
  console.log(hellow(person));
})()