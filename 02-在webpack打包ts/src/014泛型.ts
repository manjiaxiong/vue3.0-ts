(() => {
  function createArray2 <T> (value: T, count: number) {
    const arr: Array<T> = []
    for (let index = 0; index < count; index++) {
      arr.push(value)
    }
    return arr
  }
  const arr3 = createArray2<number>(11, 3)
  console.log(arr3[0].toFixed())
  // console.log(arr3[0].split('')) // error
  const arr4 = createArray2<string>('aa', 3)
  console.log(arr4[0].split(''))
  // console.log(arr4[0].toFixed()) // error
  //一个函数可以定义多个泛型参数
  function swap <K, V> (a: K, b: V): [K, V] {
    return [a, b]
  }
  const result = swap<string, number>('abc', 123)
  console.log(result[0].length, result[1].toFixed())
})()