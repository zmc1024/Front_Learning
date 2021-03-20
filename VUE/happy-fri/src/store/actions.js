export default {
  addNum({ commit, state }, id) {   //context == vuex实例对象
    // 记录答案
    commit('REMEMBER_ANSWER', id)

    // 跳转下一题
    if(state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1)
    }
  }
}