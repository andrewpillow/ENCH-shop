import request from '@/utils/request'

export const getSearchInfo = (key) => {
  return request.get('/goods/list', {
    params: {
      goodsName: key
    }
  })
}

export const getProductDetail = (goodsId) => {
  return request.get('/goods/detail', {
    params: {
      goodsId: goodsId
    }
  })
}

export const getProductComment = (goodsId, limit) => {
  return request.get('comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}
