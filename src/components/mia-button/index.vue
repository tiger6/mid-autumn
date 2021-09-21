<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
div {
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  background: #e69829;
  margin: 0 auto;
}
</style>
