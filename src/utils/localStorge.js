const INFO_KEY = 'hm_shopping_info'
const HIS_KEY = 'hm_history_info'

// 获取本地存储用户信息
export const getInfo = () => {
  const defaultRes = { token: '', userId: '' }
  const res = localStorage.getItem(INFO_KEY)
  return res ? JSON.parse(res) : defaultRes
}

// 设置本地存储用户信息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

// 移除本地存储用户信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

// 获取本地存储搜索记录
export const getHisInfo = () => {
  const defaultHisInfo = []
  const res = localStorage.getItem(HIS_KEY)
  return res ? JSON.parse(res) : defaultHisInfo
}

// 写入本地存储搜索记录
export const setHisInfo = (obj) => {
  localStorage.setItem(HIS_KEY, JSON.stringify(obj))
}

// 移除本地存储搜索记录
export const removeHisInfo = () => {
  localStorage.removeItem(HIS_KEY)
}
