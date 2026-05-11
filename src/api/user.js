import request from '@/utils/request'

export const getGoodsDetail = () => {
  return request.get('/page/detail', {
    params: {
      pageId: 0
    }
  })
}
