import {request} from './request'

// 当没有用export default导出时，引入需要加花括号

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}
export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
