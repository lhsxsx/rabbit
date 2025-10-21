import request from '@/utils/http';
const getDetail = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}

export {
  getDetail
}
