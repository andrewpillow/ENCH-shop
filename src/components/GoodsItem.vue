<template>
  <div class="item">
    <div class="left">
      <img src="@/assets/goods.webp">
    </div>
    <div class="right">
      <h3>餐具 綠吹天目</h3>
      <p>已售104件</p>
      <div class="price">
        <span class="newPrice">$19.9 </span>
        <span class="oldPrice"> $29.9</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.item{
  display: flex;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 3px 3px 10px #e4e4e4;
}
.left{
  width: 120px;          /* 固定左侧图片区域宽度 */
  height: 120px;
}
img{
  border-radius: 10px 0 0 10px;
  width: 100%;
  height: 100%;
  object-fit: contain;   /* 保持图片比例，不拉伸 */
}
.price,h3,p{
  margin:10px 0 10px 5px ;
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
