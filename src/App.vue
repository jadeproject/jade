<template>
  <div id="app">
    <head-title></head-title>
    <router-view/>
  </div>
</template>

<script>
  import headTitle from '@/components/global/head'

  export default {
    name: 'App',
    components:{
      headTitle
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
