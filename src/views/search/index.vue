<template>
  <div class="search">

    <!-- 商品搜索 -->
    <div class="searchBox">
      <img src="@/assets/back.svg" @click="$router.go(-1)">
      <input type="text">
      <button>搜索</button>
    </div>

    <!-- 搜索历史 -->
     <div class="history">
      <div class="historyTitle">
        <span>最近搜索</span>
        <img src="@/assets/clearAll.png">
      </div>
      <div class="historyItem">
        <span class="item">牛奶</span>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'searchPage'
}
</script>

<style scoped>
/* 搜索框 */
.searchBox{
  margin-top: 70px;
  display: flex;
}
.searchBox img{
  margin:0 10px 0 10px;
  width: 20px;
  cursor: pointer;
}
.searchBox input{
  border:1px solid black;
  margin-right:20px;
  padding-left:20px;
  width: 250px;
  height: 36.8px;
  border-radius: 20px;
}
.searchBox button{
  border:0;
  border-radius: 20px;
  width: 60px;
  background-color: black;
  color: white;
  font-weight: 300;
}

/* 搜索历史 */
.history{
  margin-left: 38px;
}
.historyTitle{
  line-height: 40px;
}
.history img{
  margin-left: 13px;
  height: 13px;
}
.history span{
  font-size: 17px;
  line-height: 20px;
}
.item{
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
  box-shadow: 2px 2px 5px rgb(177, 177, 177)
}
</style>
