<template>
  <div id="app">
    <!-- 路由页面内容 -->
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less">
.box{
  height: 300px;
  width: 300px;
  background-color: pink;
}
</style>
