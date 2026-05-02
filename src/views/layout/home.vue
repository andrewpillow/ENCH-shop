<template>
  <div class="home">
    <!-- 标题导航 -->
    <div class="title">
      ENCH 恩栖选品
    </div>

    <!-- 搜索 -->
    <div class="red">
      <div class="search">
        <img src="@/assets/search.png">
        <input type="text" name="search" v-model="searchInfo">
      </div>
    </div>

    <!-- 轮播图 -->
    <div class="swipper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </div>
    <!-- 功能导航 -->
     <div class="funcNav">
        <span>
          <img src="@/assets/vine.png">
          <p>试用</p>
        </span>
        <span>
          <img src="@/assets/discount.png">
          <p>折扣</p>
        </span>
        <span>
          <img src="@/assets/coupon.png">
          <p>优惠券</p>
        </span>
        <span>
          <img src="@/assets/holiday.png">
          <p>节日福利</p>
        </span>
     </div>

    <!-- 精选推荐/商品列表 -->
     <div class="item">
      <h2>推荐</h2>
      <hr>
      <GoodsItem style="margin-top: 40px;"></GoodsItem>
      <GoodsItem></GoodsItem>
      <GoodsItem></GoodsItem>
      <GoodsItem></GoodsItem>
      <GoodsItem></GoodsItem>
     </div>

  </div>
</template>

<script>
import { getGoodsDetail } from '@/api/user'

export default {
  name: 'homePage',
  data () {
    return {
      searchInfo: ''
    }
  },
  async created () {
    const res = await getGoodsDetail()
    console.log(res)
  }
}
</script>

<style scoped>
.home {
  margin: 0 10px 0 10px;
  /* background-color: rgb(81, 7, 7); */
}

/* 标题 */
.title {
  height: 70px;
  line-height: 70px;

  font-size: large;
  font-weight: 900;
}

/* 搜索框 */
.red{
  height:70px
}

.search{
  border-radius: 35px;
  margin: 7px 7px 7px 7px;
  border:1px solid;
  background-color: rgb(254, 254, 254);
}

img{
  display: inline-block;
  margin:0 15px 0 15px;
  height:16px;
}

.search input {
  border: 0;
  height: 40px;
  width: 82%;
}

/* 轮播图 */
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    /* 4:3比例轮播图 */
    line-height: 282px;
    text-align: center;
    background-color: #39a9ed;
  }

  /* 功能导航 */

  .funcNav span{
    margin: 10px 0 10px 0;
    display: inline-block;
    text-align: center;
    width: 25%;
  }
  .funcNav  img{
    height: 40px;
  }
  .funcNav p{
    font-size: 12px;
    color: rgb(78, 78, 78);
  }

  /* 精选推荐/商品列表 */
  .item{
    margin-bottom: 60px;
  }
  .item h2{
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
    font-weight:300;
    font-size: 18px;
  }
</style>
