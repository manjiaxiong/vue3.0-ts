<template>
  <div
    class="Item"
    :style="{ backgroundColor: bgColor }"
    @mouseenter="change(true)"
    @mouseleave="change(false)"
  >
    <input type="checkbox" v-model="checkbox" />
    <span>{{ todo.task }}</span>
    <button @click="deleteTodo(index)" v-if="isShow">删除</button>
  </div>
</template>

<script lang="ts">
import Todo from "../types/todo";
import { ref, computed } from "vue";
export default {
  props: {
    todo: {
      type: Object as () => Todo, //转化成Todo类型
      require: true,
    },
    index: {
      type: Number,
      require: true,
    },
    deleteTodo: {
      type: Function,
      require: true,
    },
    updateTodo: {
      type: Function,
      require: true,
    },
  },
  setup(props: any) {
    const bgColor = ref("#eee");
    const isShow = ref(false);
    const change = (flag: boolean) => {
      if (flag) {
        bgColor.value = "pink";
        isShow.value = true;
      } else {
        bgColor.value = "#eee";
        isShow.value = false;
      }
    };
    const checkbox = computed({
      get() {          
        return props.todo.checkbox;
      },
      set(val) {
        console.log(val);

         props.updateTodo(props.todo, val);
      },
    });
    return {
      isShow,
      bgColor,
      change,
      checkbox,
    };
  },
};
</script>

<style scoped>
.Item {
  width: 100%;
  line-height: 40px;
  border: 1px dashed #ccc;
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
