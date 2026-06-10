<template>
  <div class="cart">

    <!-- 标题栏 -->
    <div class="title">
      <div class="left">
        <h3>购物袋</h3>
        <p style="color: #b0afaf;font-size: 12px;margin-top:5px">配送至 重庆渝北区礼嘉街道</p>
      </div>
      <div class="right">编辑</div>
    </div>

    <!-- 购物商品项 -->
    <div class="item">
      <div class="left">
        <!-- <img src=""> -->
      </div>
      <div class="right">
        <h4>产品标题1</h4>
        <div class="info">
          <span>$799.00</span>
          <div class="countBox">
            <button @click="count --" :disabled="count < 2">-</button>
            <input type="number" v-model.number="count">
            <button @click="count ++">+</button>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'cartPage',
  data () {
    return {
      count: 1
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:20px;
  border-bottom: 1px solid rgb(234, 234, 234);
}
.title .right{
  color: #b0afaf;
}

/* item */
.item{
  display: flex;
  padding:20px;
  border-bottom: 1px solid rgb(234, 234, 234);
}
.item .info{
  display: flex;
}
.countBox{
  display: flex;
  justify-content: center;
  border-radius:35px ;
  padding:7px 0;
  margin-top: 20px;
  border:1px solid #e4e4e4;
  width:88px;
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
</style>
