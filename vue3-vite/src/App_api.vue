<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <h2>{{name}}</h2>
  <div>{{count}}</div>
  <div>{{obj.objCount}}</div>
  <button @click="add">增加</button>
  <h2>name: {{state.name}}</h2>
  <h2>age: {{state.age}}</h2>
  <h2>wife: {{state.wife}}</h2>
  <hr>
  <h2>{{user.age.age}}</h2>
  <button @click="update">更新</button>
</template>

<script>
import Child from './components/Child.vue'
import {ref,reactive,defineComponent} from 'vue'
export default defineComponent ({
  name: 'App',
  setup(props) {
    const name='熊家满'
    const obj=reactive({
      objCount:0
    })
    // console.log(obj);
    const count=ref(1)//ref将数据变为响应式数据
        /* 
    reactive: 
        作用: 定义多个数据的响应式
        const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
        响应式转换是“深层的”：会影响对象内部所有嵌套的属性
        内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
    */
    function add(){
        count.value++
        obj.objCount++
    }

    /* 
    定义响应式数据对象
    */
    const state = reactive({
      name: 'tom',
      age: 25,
      wife: {
        name: 'marry',
        age: 22
      },
    })

    console.log(state, state.wife)
    let obj1={
      age:{
        age:0
      }
    }
    let user=reactive(obj1)
    const update = () => {
      state.name += '--'
      state.age += 1
      obj1.age.age+=1
      state.wife.name += '++'
      state.wife.age += 2
    }

    return {
      user,
      state,
      update,
      name,
      count,
      user,
      obj,
      add
    }
  },
  components: {
    // HelloWorld
  }
})
</script>
