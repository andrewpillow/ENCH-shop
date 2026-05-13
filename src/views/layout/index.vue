<template>
  <div class="layout">
    <!-- 路由页面内容 -->
    <div class="page">
      <router-view></router-view>
    </div>
    <!-- 二级路由切换 -->
    <div class="tabber">
      <van-tabbar  v-model="active" active-color="black" inactive-color="grey" route>
        <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="list-switch" to="/category">分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact-o" to="/user">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layoutPage',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>
</style>
