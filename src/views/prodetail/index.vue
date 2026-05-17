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
      <div class="comments" >
        <div class="item" v-for="item in commentsList.list" :key="item.comments_id" style="margin-top:10px;height: 100px;overflow: hidden;">
          <div class="userInfo" style="display: flex;align-items: center;height: 30px;">
            <img :src="item.user.avatar_url" style="margin-right:10px;width: 30px;height:30px;border-radius: 15px;background-color: grey;">
            <span style="margin-right:10px;font-size: 13px;font-weight: 400;">{{ item.user.nick_name }}</span>
            <!-- <span style="margin:0 20px;display: inline-block;width: 100px;height:13px;overflow: hidden;color: grey;font-size: 13px;">{{ item.create_time }}</span> -->
            <img src="@/assets/star.svg" style="height: 12px;">
            <span style="font-size: 10px;">{{ item.score }}</span>
          </div>
          <div class="text" style="overflow: hidden;padding-top:10px ;font-size: 13px;font-weight: 200;">
            {{ item.content }}
          </div>
        </div>
        <div class="moreBtn" style="display: flex;align-items: center;">
          <button style="margin:10px auto;margin-bottom:20px;padding:7px 20px;background-color: #fff;border: 1px solid lightgrey;font-size: 12px;font-weight: 200;border-radius: 29px;">查看全部 {{commentsList.total}} 条晒单</button>
        </div>
      </div>
    </div>

    <!-- 描述图片 -->
    <h3 style="margin-top:5px;padding:13px;font-size: 15px;background-color: #fff;">商品详情</h3>
    <div class="detail" v-html="prodetail.content"></div>

    <!-- 底部导航 -->
    <div class="btmNav">
      <div class="left"></div>
      <div class="right">
        <button style="background-color: black;color: lightgrey;" @click=" isShow = true ">加入购物车</button>
        <button style="background-color: #fff;" @click="$router.push('/pay')">立即购买</button>
      </div>
    </div>

    <!-- 底部弹窗 -->
    <div class="popUp">
      <van-popup v-model="isShow" closeable round position="bottom" :style="{ height: '70%' }">
        <div class="itemInfo" style="display: flex;margin:20px 50px 30px 17px">
          <img :src="prodetail.goods_image" style="width:35%;object-fit: contain;">

          <!-- 商品信息 -->
          <div class="item" style="display:flex;flex-direction:column;justify-content:space-between;height: 121.45px;overflow: hidden;margin-left:15px">
            <div class="up">
              <p v-if="prodetail.goods_price_min" style="background-color: red;width: 60px;padding: 5px;font-size: 12px;color: #e8e8e8;font-weight: 900;">onSALE</p>
              <p style="margin-top:5px;font-size: 12px;font-weight: 700;">{{prodetail.goods_name}}</p>
            </div>
            <div class="bottom">
              <span style="font-weight: 1000;font-size: 20px;">${{prodetail.goods_price_max}}</span>
              <span style="margin-left:7px;font-weight: 100;font-size: 15px;text-decoration: line-through;">${{prodetail.goods_price_min}}</span>
            </div>
          </div>
        </div>
        <hr style="border:1px solid #e8e8e8">

        <!-- 数量组件 -->
         <div class="count">
          <h3>数量</h3>
          <div class="countBox">
            <button @click="count --" :disabled="count < 2">-</button>
            <input type="number" v-model.number="count" @change="validCheck">
            <button @click="count ++">+</button>
          </div>
         </div>

        <!-- 确定按钮 -->
         <div class="submit">
           <button>确定</button>
         </div>
      </van-popup>
    </div>

  </div>
</template>

<script>

import { getProductComment, getProductDetail } from '@/api/product'

export default {
  name: 'proDetail',
  data () {
    return {
      prodetail: [],
      commentsList: [],
      isShow: false,
      count: 1
    }
  },
  async created () {
    const res = await getProductDetail(this.$route.query.product)
    this.prodetail = res.data.data.detail
    console.log(this.prodetail)

    const comments = await getProductComment(this.$route.query.product, 3)
    this.commentsList = comments.data.data
    console.log(this.commentsList)
  },
  methods: {
    validCheck () {
      if (this.count <= 0) {
        this.count = 1
        this.$toast('请输入正确数量')
      } else if (this.count > 999) {
        this.count = 999
        this.$toast('请输入正确数量')
      }
    }
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
  margin-bottom:66.23px;
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
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  height: 70px;
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
/* 加入购物车弹窗 */
.count{
  margin: 20px 17px;
  width: 25%;
}
.countBox{
  display: flex;
  justify-content: center;
  border-radius:35px ;
  padding:7px 0;
  margin-top: 20px;
  border:1px solid #e4e4e4;
}
.countBox button{
  border: 0px;
  background-color: #fff;
  font-size: 20px;
  font-weight: 300;

}
.countBox button:disabled{
  border: 0px;
  background-color: #fff;
  font-size: 20px;
  font-weight: 300;
  color:rgb(199, 199, 199)

}
.countBox input{
  width: 40px;
  border:0px;
  font-weight:700;
  font-size: 17px;
  text-align:center
}

/* 加入购物车确认按钮 */
.submit button{
  position: fixed;
  bottom: 30px;
  width: 91%;
  padding:15px 0;
  margin:20px 17px;
  border:0px;
  border-radius:55px;
  background-color: rgb(19, 19, 19);
  color:rgb(231, 231, 231);
  font-size: 14px;
  font-weight: 400;
}
</style>
