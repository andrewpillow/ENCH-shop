import { getInfo, setInfo } from '@/utils/localStorge'

export default {
  // 开启命名空间
  namespaced: true,
  strict: true,
  state () {
    return {
      userInfo: getInfo(),
      token: getInfo().token
    }
  },
  mutations: {
    // 登录时触发
    getUserInfo (state, obj) {
      state.userInfo = obj
      setInfo(obj)
    }
  }
}
