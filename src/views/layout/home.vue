<template>
  <div class="home">

    <!-- 标题导航 -->
    <div class="title" style="margin-left: 10px;">
      ENCH 恩栖选品
    </div>

    <!-- 搜索 -->
    <div class="red">
      <div class="search">
        <img src="@/assets/search.png">
        <input type="text" name="search" v-model="searchInfo" @click="$router.push('./search')">
      </div>
    </div>

    <!-- 轮播图 -->
    <div class="swipper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="item in bannerList" :key="item.imgName">
          <img :src="item.imgUrl">
        </van-swipe-item>
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
     <div class="itemDiv" style="margin-bottom: 60px;">
      <h2>推荐</h2>
      <GoodsItem v-for="item in productList" :key="item.goods_id" :item="item" ></GoodsItem>
      <img src="@/assets/end.png" style="width: 50px;margin: 50px 0px 20px 160px;">
    </div>

  </div>
</template>

<script>
import { getGoodsDetail } from '@/api/user'
import GoodsItem from '@/components/GoodsItem'

export default {
  name: 'homePage',
  data () {
    return {
      searchInfo: [],
      bannerList: [],
      productList: []
    }
  },
  async created () {
    const res = await getGoodsDetail()
    console.log(res)
    this.bannerList = res.data.data.pageData.items[1].data
    this.productList = res.data.data.pageData.items[6].data
    console.log(this.productList)
  },
  components: {
    GoodsItem
  }
}
</script>

<style scoped>
.home {
  /* margin: 0 10px 0 10px; */
  /* background-color: rgb(125, 43, 43); */
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
  display: flex;
  align-items: center;
  border-radius: 35px;
  margin: 7px 7px 7px 7px;
  border:1px solid;
  background-color: rgb(254, 254, 254);
}

.red img{
  margin:0 15px 0 9px;
  height:20px;
  line-height: 70px;
}

.search input {
  border: 0;
  height: 40px;
  width: 82%;
}

/* 轮播图 */
.swipper img{
  width: 100%;
  object-fit: contain;
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
    width: 40px;
  }
  .funcNav p{
    font-size: 12px;
    /* color: rgb(204, 204, 204); */
  }

  /* 精选推荐/商品列表 */

  .itemDiv h2{
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
    font-weight:300;
    font-size: 18px;
    /* color: rgb(222, 222, 222); */
  }
</style>
