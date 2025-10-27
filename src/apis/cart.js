import request from '@/utils/http'
const insertCartAPI = (skuId, count) => {
  return request( {
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

export { insertCartAPI }

const fineNewCartListAPI = () => {
  return request({
    url: '/member/cart',
    method: 'GET'
  })
}

export { fineNewCartListAPI }

export const delCartAPI=(ids)=>{
  return request({
    url:'/member/cart',
    method:'DELETE',
    data:{ids}
  })
}
