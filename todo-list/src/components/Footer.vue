<template>
  <div class="Footer">
    <input type="checkbox" v-model="isallCheckbox" />
    <span>{{ count }}/{{ todos.length }}</span>
    <button @click="dellAll">删除选中</button>
  </div>
</template>

<script lang="ts">
import Todo from "../types/todo";
import { computed } from "vue";
export default {
  props: {
    todos: {
      type: Object as () => Todo, //转化成Todo类型
      require: true,
    },
    updateAllTodo:{
        type:Function,
        require:true
    },
    delALLTodo:{
        type:Function,
        require:true
    }
  },
  setup(props: any) {
    const count = computed(() => {
      return props.todos.filter((item: Todo) => {
        return item.checkbox === true;
      }).length;
    });
    const isallCheckbox = computed({
      get() {
        return props.todos.every((item: Todo) => {
          return item.checkbox === true;
        });
      },
      set(val) {
          props.updateAllTodo(val)
      },
    });
    const dellAll=()=>{
        if(window.confirm('您确定要删除所有选中的任务吗?')){
            props.delALLTodo()
        }
    }
    return {
        dellAll,
      count,
      isallCheckbox
    };
  },
};
</script>

<style scoped>
.Footer {
  width: 100%;
  line-height: 40px;
  margin-top: 10px;
}
input {
  float: left;
  margin-top: 14px;
  vertical-align: top;
}
button {
  float: right;
  margin-top: 14px;
  vertical-align: top;
}
</style>
