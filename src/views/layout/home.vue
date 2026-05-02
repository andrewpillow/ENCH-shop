<template>
  <div class="home">
    <div class="home-inner">
      <header class="home-header">
        <h1 class="title">ENCH 恩熙选品</h1>
        <div class="search-wrap" role="button" @click="goSearch">
          <div class="search">
            <span class="search-icon-wrap">
              <img class="search-icon" src="@/assets/search.png" alt="">
            </span>
            <input
              type="text"
              name="search"
              v-model="searchInfo"
              class="search-input"
              placeholder="搜索商品"
              @click.stop="goSearch"
            >
          </div>
        </div>
      </header>

      <div class="carousel-wrap">
        <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="true">
          <van-swipe-item v-for="(item, index) in carouselBanners" :key="index">
            <img class="swipe-img" :src="item.src" :alt="item.alt">
          </van-swipe-item>
        </van-swipe>
      </div>

      <nav class="funcNav" aria-label="快捷入口">
        <button type="button" class="funcNav-item">
          <span class="funcNav-icon-ring">
            <img class="funcNav-icon funcNav-icon--trial" src="@/assets/home-trial.svg" alt="">
          </span>
          <span class="funcNav-label">试用</span>
        </button>
        <button type="button" class="funcNav-item">
          <span class="funcNav-icon-ring">
            <img class="funcNav-icon" src="@/assets/home-discount.svg" alt="">
          </span>
          <span class="funcNav-label">折扣</span>
        </button>
        <button type="button" class="funcNav-item">
          <span class="funcNav-icon-ring">
            <img class="funcNav-icon" src="@/assets/home-coupon.svg" alt="">
          </span>
          <span class="funcNav-label">优惠券</span>
        </button>
        <button type="button" class="funcNav-item">
          <span class="funcNav-icon-ring">
            <img class="funcNav-icon funcNav-icon--holiday" src="@/assets/home-holiday.svg" alt="">
          </span>
          <span class="funcNav-label">节日福利</span>
        </button>
      </nav>

      <section class="recommend">
        <h2 class="recommend-title">推荐</h2>
        <div class="recommend-list">
          <GoodsItem class="recommend-card" />
          <GoodsItem class="recommend-card" />
          <GoodsItem class="recommend-card" />
          <GoodsItem class="recommend-card" />
          <GoodsItem class="recommend-card" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { getGoodsDetail } from '@/api/user'

export default {
  name: 'homePage',
  data () {
    return {
      searchInfo: '',
      carouselBanners: [
        { src: require('@/assets/banner-1-curology.png'), alt: 'Curology 护肤品' },
        { src: require('@/assets/banner-2-glossier.png'), alt: 'Glossier 去角质精华' },
        { src: require('@/assets/banner-3-necessaire.png'), alt: 'Nécessaire 身体乳' },
        { src: require('@/assets/banner-4-paradox.png'), alt: 'Paradox 防晒' },
        { src: require('@/assets/banner-5-bioglow.png'), alt: 'Bioglow 护肤系列' }
      ]
    }
  },
  async created () {
    const res = await getGoodsDetail()
    console.log(res)
  },
  methods: {
    goSearch () {
      this.$router.push('/search')
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100%;
  background-color: #f5f5f7;
  padding: 14px 16px 72px;
  box-sizing: border-box;
}

.home-inner {
  width: 100%;
  max-width: 364px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}

.home-header {
  margin-bottom: 12px;
}

.title {
  margin: 0 0 14px;
  font-size: 19px;
  font-weight: 700;
  line-height: 25px;
  color: #000;
  letter-spacing: -0.02em;
}

.search-wrap {
  margin: 0;
}

.search {
  display: flex;
  align-items: center;
  height: 39px;
  padding: 0 4px 0 0;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
}

.search-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 39px;
  height: 39px;
  flex-shrink: 0;
}

.search-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.search-input {
  flex: 1;
  min-width: 0;
  height: 100%;
  border: 0;
  padding: 0 12px 0 0;
  font-size: 14px;
  color: #000;
  background: transparent;
}

.search-input::placeholder {
  color: #b3b3b3;
}

.carousel-wrap {
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 12px;
}

.my-swipe {
  height: 282px;
}

.my-swipe >>> .van-swipe__indicators {
  bottom: 16px;
}

.my-swipe >>> .van-swipe__indicator {
  width: 6px;
  height: 6px;
  margin: 0 3px;
  border-radius: 50%;
  background-color: rgba(235, 237, 240, 0.3);
  opacity: 1;
}

.my-swipe >>> .van-swipe__indicator--active {
  width: 6px;
  height: 6px;
  background-color: #fff;
}

.swipe-img {
  display: block;
  width: 100%;
  height: 282px;
  object-fit: cover;
  object-position: center;
}

.funcNav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 9px 0 12px;
  margin: 0;
  box-sizing: border-box;
}

.funcNav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 55px;
  width: 55px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.funcNav-icon-ring {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.funcNav-icon {
  max-width: 31px;
  max-height: 31px;
  width: auto;
  height: auto;
  object-fit: contain;
}

.funcNav-icon--trial {
  max-width: 24px;
  max-height: 24px;
}

.funcNav-icon--holiday {
  max-width: 24px;
  max-height: 24px;
}

.funcNav-label {
  margin-top: 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  color: #4e4e4e;
  letter-spacing: -0.06px;
  text-align: center;
}

.recommend {
  margin-top: 20px;
  margin-bottom: 8px;
}

.recommend-title {
  margin: 0 0 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 31px;
  color: #000;
  letter-spacing: -0.02em;
  text-align: left;
}

.recommend-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.recommend-card {
  margin: 0;
}
</style>
