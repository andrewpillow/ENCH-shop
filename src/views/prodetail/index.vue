<template>
  <div class="prodetail" style="background-color: #e8e8e8;">

    <!-- 返回按钮 -->
    <div class="back">
      <img src="@/assets/back.svg" @click="$router.go(-1)">
    </div>

    <!-- 轮播图 -->
    <div class="swipper">
       <van-swipe :autoplay="3000">
         <van-swipe-item v-for="(image, index) in prodetail.goods_images" :key="index">
           <img v-lazy="image.external_url" />
         </van-swipe-item>
       </van-swipe>
    </div>

    <!-- 商品基础信息 -->
    <div class="basicInfo" style="background-color: #fff;">
      <div class="price">
        <span style="font-size: 20px;font-weight: 700;">${{prodetail.goods_price_max}}</span>
        <span style="font-size: 13px;color: grey;">已售{{prodetail.goods_sales}}件</span>
      </div>
      <p style="font-size: 17px;margin-top: 10px;">{{prodetail.goods_name}}</p>
    </div>

    <!-- 评价 -->
     <div class="comments" style="background-color: #fff;margin-top:5px;padding:0px 13px;">
      <div class="coTitle" style="display: flex;justify-content: space-between;align-items:center;padding:13px 0px;">
        <span style="font-weight: 500;font-size: 15px;">晒单✨</span>
        <img src="@/assets/enter.svg" style="height: 25px;">
      </div>
     </div>

    <!-- 描述图片 -->
     <h3 style="margin-top:5px;padding:13px;font-size: 15px;background-color: #fff;">商品详情</h3>
     <div class="detail" v-html="prodetail.content"></div>

     <!-- 底部导航 -->
      <div class="btmNav">
        <div class="left"></div>
        <div class="right">
          <button style="background-color: black;color: lightgrey;">加入购物车</button>
          <button style="background-color: #fff;">立即购买</button>
        </div>
      </div>

  </div>
</template>

<script>

import { getProductDetail } from '@/api/product'

export default {
  name: 'proDetail',
  data () {
    return {
      prodetail: []
    }
  },
  async created () {
    const res = await getProductDetail(this.$route.query.product)
    this.prodetail = res.data.data.detail
    console.log(this.prodetail)
  }
}
</script>

<style scoped>
/* 返回按钮 */
.back{
  position: fixed;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 100%;
  z-index:1
}
.back img{
  margin:0 10px 0 10px;
  width: 20px;
  cursor: pointer;
}

/* 轮播图 */
.swipper img{
  width: 100%;
}

/* 商品信息 */
.basicInfo{
  padding:20px;
}
.price{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

/* 详情 */
.detail{
  width: 100%;
}
.detail img{
  width: 100%;
}
.detail >>> img {
  max-width: 100% !important;
  height: auto !important;
}
/* 底部导航 */
.btmNav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: #ffffff;
  z-index: 1;
}
.right{
  margin:0 10px;
}
.right button{
  border-radius: 20px;
  border:1px solid black;
  padding:7px 20px;
  margin:0 2px;
  font-size: 12px;
}
</style>
