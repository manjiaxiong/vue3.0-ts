<template>
  <div  
        class="Item"
        :style="{backgroundColor:bgColor}"
    >
        <input type="checkbox" >
        <span></span>
        <button >删除</button>
    </div>
</template>

<script lang='ts'>
export default {

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