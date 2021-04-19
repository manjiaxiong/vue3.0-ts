<template>
  <div class="List">
      <Item v-for="(item,index) in todos" :key="item.id" :index="index" :todo="item" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
  </div>
</template>

<script lang='ts'>
import Item from './Item.vue'
import Todo from '../types/todo'
export default {
  props:{
    todos: {
      type: Object as ()=>Todo,//转化成Todo类型
      require: true
    },
    deleteTodo:{
      type:Function,
      require:true
    },
    updateTodo:{
      type:Function,
      require:true
    }
  },
  components:{
    Item
  }
}
</script>

<style scoped>
   
</style>