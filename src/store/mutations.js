import {
  ADD_COUNTS,
  ADD_CARTS
} from './mutations-type'

const mutations = {
  // 增加个数
  [ADD_COUNTS](state,payload){
    payload.count += 1
  },
  // 添加商品
  [ADD_CARTS](state,payload){
    // 将状态存在对象模型中，模型发生改变才让界面发生改变
    payload.checked = false

    state.cartList.push(payload)
  }
}
export default mutations
