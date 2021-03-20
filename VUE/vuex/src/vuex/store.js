import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { //相当于data
  count: 1
}

const mutations = {   //是同步修改数据源的数据，主动的修改，相当于methods
  add(state, num) {
    setTimeout(() => {
      state.count += num
    },3000)
    console.log('我后出现');
  },
  reduce(abc) {
    abc.count--
  }
}

const actions = {   //是异步修改数据源的数据
  // addAction里的参数默认代表的是 vuex
  addAction (context, n) {
    setTimeout(() => {
      context.commit('add', n)
    },3000)
    console.log('我先出现');
  }
}

const getters = {   //相当于computed
  newCount: (state) => {
    return state.count ** 2
  }
}

const moduleA = {
  state,
  mutations,
  getters,
  actions
}

const state2 = {
  state,
  mutations,
  getters,
  actions
}

const moduleB = {
  state2
}

export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})