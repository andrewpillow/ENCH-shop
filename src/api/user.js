import instance from '@/utils/request'

export const getGoodsDetail = () => {
  return instance.get('/page/detail', {
    params: {
      pageId: 0
    }
  })
}
