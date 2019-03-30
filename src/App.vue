<template>
  <div id="app">
    <img src="./assets/logo.png">
    <i-button type="info">信息按钮</i-button>
    <i-button type="success">成功按钮</i-button>
    <i-button type="warning">警告按钮</i-button>
    <i-button type="error">错误按钮</i-button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
