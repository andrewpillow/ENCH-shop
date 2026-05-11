import request from '@/utils/request'

export const getSearchInfo = (key) => {
  return request.get('/goods/list', {
    params: {
      goodsName: key
    }
  })
}
