import request from '@/utils/request'
import store from '@/store/index'

export const getCartList = () => {
  if (store.state.user.userInfo.token) {
    return request.get('/cart/list', {
      headers: {
        'Access-Token': store.state.user.userInfo.token,
        platform: 'H5'
      }
    })
  }
}
