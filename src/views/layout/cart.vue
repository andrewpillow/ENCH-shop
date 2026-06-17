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
    <div class="allItem">
      <div class="item">
          <div class="checkbox" v-bind="ischecked">O</div>
          <div class="left">
            <img src="@/assets/goods01.png">
          </div>
          <div class="right">
            <div class="more">
              <button>...</button>
            </div>
            <h4>托盤几, 黑色,45x53 厘米托盤几, 黑色,45x53 厘米托盤几, 黑色,45x53 厘米</h4>
            <div class="info">
              <span style="font-size: 19px;font-weight: 700;    ">$199.9</span>
              <div class="countBox">
                <button @click="count --" :disabled="count <    2">-</button>
                <input type="number" v-model.number="count">
                <button @click="count ++">+</button>
              </div>
            </div>
          </div>
      </div>

      <div class="item">
          <div class="checkbox">✓</div>
          <div class="left">
            <img src="@/assets/goods02.png">
          </div>
          <div class="right">
            <div class="more">
              <button>...</button>
            </div>
            <h4>托盤几, 淺藍色,45x53 厘米</h4>
            <div class="info">
              <span style="font-size: 19px;font-weight: 700;    ">$199.9</span>
              <div class="countBox">
                <button @click="count --" :disabled="count <    2">-</button>
                <input type="number" v-model.number="count">
                <button @click="count ++">+</button>
              </div>
            </div>
          </div>
      </div>
    </div>

    <!-- 结账导航 -->
     <div class="btmNavBar">

      <div class="checkbox">
        <span>O</span>
        <p style="font-size: 13px;">待全选</p>
      </div>

      <div class="right">
        <div class="totalPrice">$400</div>

        <div class="checkOut">
          <button>结算 ({{count*2}})</button>
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
      count: 1,
      ischecked: true
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

/* 购物车商品项 */

.item{
  display: flex;
  padding:5px 20px;
  border-bottom: 1px solid rgb(234, 234, 234);
}

.item .checkbox{
  margin-top:70px;
  padding-right:20px;
  font-size: 20px;
}

.item img{
  margin-top: 22.8px;
  width: 100px;
}

.item .right{
  margin-left: 10px;
}

.item .right .more{
  display: flex;
  justify-content: end;
}

.item .right h4{

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 187px;
  height: 37px;
  font-weight: 400;
  font-size: 13px;
}

.item .right .more button{
  border:0;
  background-color: #fff;
}

.item .info{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
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

/* 结账导航 */
.btmNavBar{
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom:0;
  margin-bottom: 56px;
  background-color: white;
  width: 100%;
  height: 60px;
}
.btmNavBar .checkbox{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:13px;
  padding-left:20px;
  font-size: 20px;
}
.btmNavBar .right{
  display: flex;
  align-items: center;
}
.btmNavBar .right .totalPrice{
  margin-right: 10px;
  font-size: 16px;
  font-weight: 1000;
}
.btmNavBar .right button{
  border: 0;
  border-radius: 70px;
  padding: 10px 20px;
  margin-right: 5px;
  background-color: black;
  color: white;
  font-size: 13px;
}
</style>
