<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Header/>
    <List />
    <Footer />
  </div>
  <!-- <router-view/> -->
</template>
  <script>
  import { defineComponent } from 'vue'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import List from './components/List.vue'
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
      return {

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
