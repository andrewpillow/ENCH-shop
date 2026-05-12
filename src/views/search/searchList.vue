<template>
  <div class="list">
    <!-- 返回按钮 -->
    <div class="back">
      <img src="@/assets/back.svg" @click="$router.go(-1)">
    </div>
    <!-- 小标题 -->
    <div class="headline" style="margin-left: 12px;margin-top: 10px;">
    <h2>Result of &nbsp;<span style="font-size: 30px;font-weight: 200;">{{ this.$route.query.search }}</span></h2>
    </div>

    <!-- 商品列表 -->
    <div class="list">
      <GoodsItem v-for="item in productList" :key="item.goods_id" :item="item"></GoodsItem>
    </div>
  </div>
</template>

<script>

import { getSearchInfo } from '@/api/product'
import GoodsItem from '@/components/GoodsItem'

export default {
  name: 'searchList',
  data () {
    return {
      productList: []
    }
  },
  async created () {
    const res = await getSearchInfo(this.$route.query.search)
    // console.log(res.data.data.list.data)
    this.productList = res.data.data.list.data
  },
  components: {
    GoodsItem
  }
}
</script>

<style scoped>
/* 返回按钮 */
.back{
  margin-top: 30px;
}
.back img{
  margin:0 10px 0 10px;
  width: 20px;
  cursor: pointer;
}
</style>
