<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Header :addTodo="addTodo"/>
    <List :todos='state.todos' :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
    <Footer :todos='state.todos' :updateAllTodo="updateAllTodo" :delALLTodo="delALLTodo"/>
  </div>
  <!-- <router-view/> -->
</template>
  <script lang='ts'>
  import { defineComponent,isReactive } from 'vue'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import List from './components/List.vue'
  import Todo from './types/todo'//引入接口规范
  import {reactive,
  toRef,
  ref,} from 'vue'
  export default defineComponent({
    components:{
      Header,
      Footer,
      List
    },
    setup(){
      const state=reactive<{ todos:Todo[]}>({
        todos:[
        {
          task:'熊家满',
          id:Math.random(),
          checkbox:false
        },
        {
          task:'熊家满1',
          id:Math.random(),
          checkbox:true
        },
        {
          task:'熊家满2',
          id:Math.random(),
          checkbox:false
        }
      ]})
      const addTodo=(todo:Todo):void=>{//增加
          state.todos.unshift(todo)
      }
      const deleteTodo=(index:number)=>{//删除
          state.todos.splice(index,1)
      }
      const updateTodo=(todo:Todo,val:boolean)=>{//更新todo
          todo.checkbox=val
      }
      const updateAllTodo=(falg:boolean)=>{//更新全部todo
        state.todos.forEach((item:Todo)=>{
          item.checkbox=falg
        })
      }
      const delALLTodo=()=>{
        // console.log(111);
        
        state.todos=state.todos.filter(item=>{
          return item.checkbox===false
        })                
      }
      return {
      delALLTodo,
      state,
      addTodo,
      deleteTodo,
      updateTodo,
      updateAllTodo
      }
    },
  })
  </script>
  
<style lang="scss">
#app{
        width: 600px;
        margin: 100px auto;
    }
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
