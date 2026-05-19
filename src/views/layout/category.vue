<template>
  <div class="catagory">
      <!-- 搜索框 -->
      <div class="searchBox">
        <img src="@/assets/back.svg" @click="$router.go(-1)">
        <input type="text" v-model="searchItem" ref="inputRef" @keyup.enter="search(searchItem)">
        <button @click="search(searchItem)">搜索</button>
      </div>

      <!-- 分类页面 -->
       <div class="categoryPage">
        <!-- 左导航 -->
         <div class="left">
          <span v-for="(item,index) in categoryList" :key="item.id" :class="{active: activeid === item.id}" @click="showList(item.id,index)">{{item.name}}</span>
         </div>
        <!-- 右分类选项 -->
         <div class="right">
          <div class="item" v-for="item in cateList" :key="item.id" @click="$router.push(`/searchlist?search=${item.title}`)">
            <img style="border:0px;width:70px;height:70px;background-color: #e8e8e8;">
            <span style="height: 30px;line-height: 30px;font-size: 12px;font-weight: 100;">{{ item.title }}</span>
          </div>
         </div>
       </div>
  </div>
</template>

<script>
export default {
  name: 'catagoryPage',
  data () {
    return {
      categoryList: [
        {
          id: 1,
          name: '手机 3C',
          children: [
            { id: 101, title: '三星' },
            { id: 102, title: '苹果' },
            { id: 103, title: '小米' }
          ]
        },
        {
          id: 2,
          name: '家电',
          children: [
            { id: 201, title: '电火锅' },
            { id: 202, title: '冰箱' },
            { id: 203, title: '风扇' }
          ]
        },
        {
          id: 3,
          name: '饮品 冲调',
          children: [
            { id: 301, title: '酒' },
            { id: 302, title: '奶粉' },
            { id: 303, title: '牛奶' }
          ]
        }
      ],
      activeid: 1,
      searchItem: '',
      cateList: []
    }
  },
  created () {
    this.showList(1, 0)
  },
  methods: {
    showList (id, index) {
      this.activeid = id
      this.cateList = this.categoryList[index].children || []
    },
    search (key) {
      if (key === '') {
        this.$toast('忘记输入内容啦.')
        return
      }
      this.$router.push(`/searchlist?search=${key}`)
    }
  }
}
</script>

<style scoped>
/* 搜索框 */
.searchBox{
  margin: 10px 0px;
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
/* 分类页面左侧导航 */
.categoryPage .left{
  width: 25%;
  position: fixed;   /* 固定定位 */
  top: 55px;            /* 顶贴齐 */
  left: 0;          /* 靠右对齐 */
  bottom: 0;
  background-color: #ededed;

  display: flex;
  flex-direction: column;
}
.categoryPage .left span{
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-weight: 300;
  font-size: 12px;
}
.active{
  background-color: #fff;
}
/* 分类页面右侧选项 */
.right{
  width: 75%;

  display: flex;
  flex-wrap: wrap;
  align-content: start;

  position: fixed;   /* 固定定位 */
  top: 55px;            /* 顶贴齐 */
  right: 0;          /* 靠右对齐 */
  bottom: 0;
}
.right .item{
  margin: 10px 0px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
