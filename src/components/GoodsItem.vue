<template>
  <div class="item">
    <div class="left">
      <img src="@/assets/recommend-placeholder.png" alt="Curology 护肤品（占位图）">
    </div>
    <div class="right">
      <h3 class="name">ParaDox 防晒乳液</h3>
      <p class="meta">已售104件</p>
      <div class="price-row">
        <span class="new-price">$19.9</span>
        <span class="old-price">$19.9</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.item {
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border-radius: 5px;
  margin: 0;
  background-color: #fff;
  box-shadow: 3.2px 3.2px 5.333px #e4e4e4;
}

.left {
  flex-shrink: 0;
  width: 128px;
  height: 128px;
}

.left img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px 0 0 5px;
  object-fit: cover;
}

.right {
  flex: 1;
  min-width: 0;
  padding: 15px 10px 12px 17px;
  box-sizing: border-box;
  position: relative;
}

.name {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  color: #000;
  letter-spacing: -0.02em;
}

.meta {
  margin: 0 0 12px;
  color: #b3b3b3;
  font-size: 12.8px;
  line-height: 1.2;
  letter-spacing: -0.06px;
}

.price-row {
  position: absolute;
  left: 17px;
  right: 10px;
  bottom: 12px;
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.new-price {
  font-size: 16px;
  font-weight: 700;
  color: #000;
  letter-spacing: -0.02em;
}

.old-price {
  font-size: 16px;
  font-weight: 700;
  color: #b3b3b3;
  text-decoration: line-through;
  letter-spacing: -0.02em;
}
</style>
