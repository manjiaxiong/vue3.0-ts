<template>
  <div class="Header">
      <h1>Todo List</h1>
      <input  v-model="str" placeholder="请派发任务" @keyup.enter="add()">
  </div>
</template>

<script lang='ts'>
import {ref} from 'vue'
export default {
    props:{
        addTodo: {
            type:Function,
            require:true
        }
    },
    setup(props:any){
        const str=ref('')
        const add=function(){
            console.log(111);
            const title=str.value
            if(!title.trim()){//输入为空
                return false
            }
            props.addTodo({
                id:Math.random(),
                task:title,
                checkbox:false
            })
            str.value=''
        }
        return{
            str,
            add
        }
    }
}
</script>

<style scoped>
h1{
        text-align: center;
        font-size: 18px;
    }
    input{
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        padding: 0 10px;
    }
</style>