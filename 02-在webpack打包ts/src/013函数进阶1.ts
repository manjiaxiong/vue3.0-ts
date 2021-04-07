(() => {
  // 命名函数
function add(x:string, y:string):string {
  return x + y
}

// 匿名函数
let myAdd = function(x:string, y:string) :string{ 
  return x + y;
  }
  let myAdd2: (x: number, y: number) => number = 
function(x: number, y: number): number {
  return x + y
    }
  console.log(myAdd2(1, 6));
  // 在 TypeScript 里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是 undefined 时。
  // 它们叫做有默认初始化值的参数。 让我们修改上例，把firstName 的默认值设置为 "A"。
  function buildName(firstName: string='A', lastName?: string): string {
    if (lastName) {
      return firstName + '-' + lastName
    } else {
      return firstName
    }
  }
  
  console.log(buildName('C', 'D'))
  console.log(buildName('C'))
  console.log(buildName())
  // 必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。
  // 在 JavaScript 里，你可以使用 arguments 来访问所有传入的参数。
  // 在 TypeScript 里，你可以把所有参数收集到一个变量里：
  // 剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。
  // 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。
  function info(x: string, ...args: string[]) {
    console.log(x, args)
  }
  info('abc', 'c', 'b', 'a')
// 重载函数声明
function add1 (x: string, y: string): string
function add1 (x: number, y: number): number

// 定义函数实现
function add1(x: string | number, y: string | number): string | number|void {//严格模式下必须加上undefined或void
  // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y
  } else if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  } else {
    return undefined
  }
}

console.log(add1(1, 2))
console.log(add1('a', 'b'))
// console.log(add(1, 'a')) // error
})()