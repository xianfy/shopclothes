import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

import mutations from "./mutations";
import actions from './actions';
import getters from './getters'

const state = {
  cartList:[]
}

const store = new vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
