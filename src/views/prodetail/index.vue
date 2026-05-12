<template>
  <div class="prodetail">
    <!-- 返回按钮 -->
    <div class="back">
      <img src="@/assets/back.svg" @click="$router.go(-1)">
    </div>

    <!-- 主图 -->

    <!-- 商品基础信息 -->

    <!-- 评价 -->

    <!-- 描述图片 -->
  </div>
</template>

<script>

import { getProductDetail } from '@/api/product'

export default {
  name: 'proDetail',
  async created () {
    const res = await getProductDetail(this.$route.query.product)
    console.log(res)
  }
}
</script>

<style scoped>
/* 返回按钮 */
.back{
  margin-top: 30px;
  margin-bottom: 20px;
}
.back img{
  margin:0 10px 0 10px;
  width: 20px;
  cursor: pointer;
}
</style>
