import { getInfo, setInfo } from '@/utils/localStorge'

export default {
  // 开启命名空间
  namespaced: true,
  state () {
    return {
      userInfo: getInfo()
    }
  },
  mutations: {
    getUserInfo (state, obj) {
      state.userInfo = obj
      setInfo(obj)
    }
  }
}
