<template>
  <img alt="mid autumn logo" src="./assets/mid-autumn.jpg" />
  <!-- <mia-button>happy mid autumn</mia-button> -->
  <mia-hello msg="中秋节快乐！！！"></mia-hello>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 50%;
}
@media screen and (max-width: 414px) {
  img {
    width: 70%;
  }
}
</style>
