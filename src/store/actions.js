import {
  ADD_COUNTS,
  ADD_CARTS
} from './mutations-type'

const actions = {
  addCart(context,payload){
    // 数组常用的方法有哪些
    // push pop shift unshift join map reduce filter sort reverse slice splice等

    // let oldGoods = null
    // 判断是否iid相等，进而判断商品是否存在
    // for (let item of state.cartList){
    //   if (item.iid === payload.iid){
    //     oldGoods = item;
    //   }
    // }
    // 返回一个Promise对象，在外部要是想获取这个Promise对象的返回值 需要在外部用then方法
    return new Promise((resolve, reject) => {
      let oldGoods = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldGoods){
        context.commit(ADD_COUNTS,oldGoods)
        resolve('商品数量+1')
      }else {
        payload.count = 1
        context.commit(ADD_CARTS,payload)
        resolve('成功添加商品')
      }
    })
  }
}

export default actions
