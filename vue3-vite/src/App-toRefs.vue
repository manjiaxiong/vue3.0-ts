<template>
  <h2>App</h2>
  <h3>foo: {{foo}}</h3>
  <h3>bar: {{bar}}</h3>
  <h3>foo2: {{foo2}}</h3>
  <h3>bar2: {{bar2}}</h3>


</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
/*
toRefs:
  将响应式对象中所有属性包装为ref对象, 并返回包含这些ref对象的普通对象
  应用: 当从合成函数返回响应式对象时，toRefs 非常有用，
        这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
*/
/***
 * 把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref

  应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用

  问题: reactive 对象取出的所有属性值都是非响应式的

  解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性
 */
export default {

  setup () {

    const state = reactive({
      foo: 'a',
      bar: 'b',
    })

    const stateAsRefs = toRefs(state)

    setTimeout(() => {
      state.foo += '++'
      state.bar += '++'
    }, 2000);

    const {foo2, bar2} = useReatureX()


    return {
      // ...state,
      ...stateAsRefs,
      foo2, 
      bar2
    }
  },
}

function useReatureX() {
  const state = reactive({
    foo2: 'a',
    bar2: 'b',
  })

  setTimeout(() => {
    state.foo2 += '++'
    state.bar2 += '++'
  }, 2000);
  // console.log(toRefs(state));
  
  return toRefs(state)
}

</script>
