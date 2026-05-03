<template>
  <div class="item">
    <div class="left">
      <img :src="item.goods_image">
    </div>
    <div class="right">
      <h3>{{ item.goods_name }}</h3>
      <p>已售{{ item.goods_sales }}件</p>
      <div class="price">
        <span class="newPrice">${{item.goods_price_max}} </span>
        <span class="oldPrice"> ${{item.goods_price_min}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    item: {
      type: Object,
      required: true, // 父组件未传参会报错
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.item{
  display: flex;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 3px 3px 10px rgb(50, 4, 4);
  height: 120px;
  background-color: #ececec;

}
.left{
  width: 120px;          /* 固定左侧图片区域宽度 */
  height: 120px;
}
img{
  border-radius: 10px 0 0 10px;
  width: 120px;
  height: 100%;
  object-fit: contain;   /* 保持图片比例，不拉伸 */
}
.price,h3,p{
  margin:10px 0 10px 5px ;
}
h3{
  font-size: 14px;
  /* 多行省略号技巧 (显示2行) */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
p{
  color: rgb(179, 179, 179);
  font-size: 12px;
}
.newPrice{
  font-size: larger;
}
.oldPrice{
  text-decoration: line-through; /* 删除线样式 */
  color: rgb(179, 179, 179);
  }
</style>
