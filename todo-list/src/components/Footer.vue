<template>
  <div class="Footer">
        <input type="checkbox" >
        <span>{{1}}/{{4}}</span>
        <button>删除选中</button>
    </div>
</template>

<script lang='ts'>
export default {

}
</script>

<style scoped>
 .Footer{
        width: 100%;
        line-height: 40px;
        margin-top: 10px;
    }
    input{
        float: left;
        margin-top: 14px;
        vertical-align: top;
    }
    button{
        float: right;
        margin-top: 14px;
        vertical-align: top;
    }  
</style>