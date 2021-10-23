(()=>{
    /***
     * 布尔类型
     */
    let flag:boolean=false
    console.log(flag);
    /***
     * 数字类型
     */
     let a1: number = 10 // 十进制
     let a2: number = 0b1010  // 二进制
     let a3: number = 0o12 // 八进制
     let a4: number = 0xa // 十六进制
     console.log(a1,a2,a3,a4);
     /***
      * 字符串类型
      */
      let name:string = 'tom'
      name = 'jack'
      // name = 12 // error
      let age:number = 12
      const info = `My name is ${name}, I am ${age} years old!`
      console.log(info);
      //注ts中赋值的时候，只能用这个类型的数据
      /***
       * undefined和null可以作为其它类型的子类型
       * 注！！！上面的在严格模式下不成立（修改tsconfig的strict为false 能将模式转化为非严格模式）
       * 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
       */
       let u: undefined = undefined
       let n: null = null
       /***
        * 数组与元组
        */
       //注数组里面的类型必须与规定的一致，否则会报错，且不会编译通过
       //数组定义方式1
       let list1: number[] = [1, 2, 3]
       //数组定义方式2（f泛型写法）
       let list2: Array<number> = [1, 2, 3]
       /***
        * 元组数据类型
        * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string 和 number 类型的元组。
        */
        let t1: [string, number]
        t1 = ['hello', 10] // OK
        //t1 = [10, 'hello'] // Error
        console.log(t1[0].substring(1)) // OK
        //onsole.log(t1[1].substring(1)) // Error, 'number' 不存在 'substring' 方法
        /***
         * 枚举类型
         * enum 类型是对 JavaScript 标准数据类型的一个补充。 使用枚举类型可以为一组数值赋予友好的名字。
         */
        // 枚举数值默认从0开始依次递增
        //默认情况下，从 0 开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1 开始编号：
        // 根据特定的名称得到对应的枚举数值
        //或者，全部都采用手动赋值：
        //枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为 2，但是不确定它映射到 Color 里的哪个名字，我们可以查找相应的名字：
        enum Color{
            //可以是
            red=4,green=8,blue,男,女
        }
        const myColor:Color=Color.red
        console.log('mycolor',myColor,Color.green,Color.blue,Color[9],Color.男,Color[11]);
        /***
         * any类型
         */
        //有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any 类型来标记这些变量：
        let notSure: any = 4
        notSure = 'maybe a string'
        notSure = false // 也可以是个 boolean  
        let list: any[] = [1, true, 'free']
        list[1] = 100
        /***
         * void
         * 某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
         */
        /* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
        function fn(): void {
            console.log('fn()')
            return undefined
            // return null // 严格模式下会报错
            // return 1 // error
        }
        fn()
        /***
         * object
         * object 表示非原始类型，也就是除 number，string，boolean之外的类型。使用 object 类型，就可以更好的表示像 Object.create 这样的 API
         */
         function fn2(obj:object):object {
            console.log('fn2()', obj)
            return {}
            // return undefined
            // return null
          }
          console.log(fn2(new String('abc')))
          // console.log(fn2('abc') // error
          console.log(fn2(String))
          /***
           * 联合数据类型
           * 联合类型（Union Types）表示取值可以为多种类型中的一种
            需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
           */
            function toString2(x: number | string) : string {
                return x.toString()
              }
            /**
             * 
             * 断言数据类型
             *  类型断言(Type Assertion): 可以用来手动指定一个值的类型
                语法:
                 方式一: <类型>值
                 方式二: 值 as 类型  tsx中只能用这种方式
             */
            
             
             /* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */
             function getLength(x: number | string) {
                if ((<string>x).length) {
                  return (x as string).length
                } else {
                  return x.toString().length
                }
              }
              console.log(getLength('abcd'), getLength(1234))
            /***
             * 类型推断
             * 类型推断: TS会在没有明确的指定类型的时候推测出一个类型
             有下面2种情况: 1. 定义变量时赋值了, 推断为对应的类型. 2. 定义变量时没有赋值, 推断为any类型
             */
            /* 定义变量时赋值了, 推断为对应的类型 */
            let b9 = 123 // number
            // b9 = 'abc' // error

            /* 定义变量时没有赋值, 推断为any类型 */
            let b10  // any类型
            b10 = 123
            b10 = 'abc'
})()