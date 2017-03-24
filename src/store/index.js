import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

/* eslint-disable no-undef */
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

const store = new Vuex.Store({
  actions,
  mutations,

  state: {
    todos: {
      // 'id': {
      //   name:'name',
      //   active:true,
      //   done:true
      // }
    }
  },

  getters: {
    activeTodos(state, getters) {
      const { todos } = state
      return Object.keys(todos).reduce((acc, key) => {
        acc[key] = todos[key]
        return acc
      }, {})
    }
  }
})

export default store
