<template>
  <div class="search">

    <!-- 商品搜索 -->
    <div class="searchBox">
      <img src="@/assets/back.svg" @click="$router.go(-1)">
      <input type="text" v-model="searchItem" ref="inputRef">
      <button @click="search(searchItem)">搜索</button>
    </div>

    <!-- 搜索历史 -->
     <div class="history" v-if="searchHistory.length >= 1">
      <div class="historyTitle">
        <span>最近搜索</span>
        <img src="@/assets/clearAll.png" @click="clearHistory()">
      </div>
      <div class="historyItem">
        <span class="item" v-for="item in searchHistory" :key="item" @click="search(item)">{{item}}</span>
      </div>
     </div>
  </div>
</template>

<script>
import { getHisInfo, setHisInfo, removeHisInfo } from '@/utils/localStorge'

export default {
  name: 'searchPage',
  data () {
    return {
      searchItem: '',
      searchHistory: getHisInfo()
    }
  },
  mounted () {
    this.$refs.inputRef.focus()
  },
  methods: {
    search (key) {
      if (key === '') {
        this.$toast('忘记输入内容啦.')
        return
      }
      if (this.searchHistory.indexOf(key) === -1) {
        this.searchHistory.unshift(key)
        this.searchItem = ''
      } else {
        const index = this.searchHistory.indexOf(key)
        this.searchHistory.splice(index, 1)
        this.searchHistory.unshift(key)
      }
      setHisInfo(this.searchHistory)
      this.$router.push(`/searchlist?search=${key}`)
    },
    clearHistory () {
      removeHisInfo()
      this.searchHistory = []
    }
  }
}
</script>

<style scoped>
/* 搜索框 */
.searchBox{
  margin-top: 20px;
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
  margin-right: 20px;
}
.historyTitle{
  line-height: 40px;
}
.history img{
  margin-left: 13px;
  height: 13px;
}
.historyTitle span{
  font-size: 17px;
  line-height: 20px;
}
.item{
  display: inline-block;
  border-radius: 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 10px 5px 10px;
  box-shadow: 2px 2px 5px rgb(177, 177, 177);
}
</style>
