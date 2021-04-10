// getters类似于计算属性，他可以对state中的数据进行操作再进行展示

const getters = {
  cartList(state){
    return state.cartList
  },
  cartCount(state,getters){
    return getters.cartList.length
  }
}

export default getters
