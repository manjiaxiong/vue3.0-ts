<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <h2>{{name}}</h2>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  setup(props) {
    const name='熊家满'
    return {
      name
    }
  },
  components: {
    // HelloWorld
  }
}
</script>
