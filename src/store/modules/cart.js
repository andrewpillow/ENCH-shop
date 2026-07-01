import { getCartList } from '@/api/cart'

export default {
  // 开启命名空间
  namespaced: true,
  strict: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    setCartList (state, newList) {
      state.cartList = newList
      // 为每个购物袋内商品添加选中属性
      state.cartList.forEach(item => {
        item.ischecked = true
      })
    }

  },
  actions: {
    async getInfo (context) {
      const { data } = await getCartList()
      console.log(data)
      context.commit('setCartList', data.data.list)
    }
  }
}
