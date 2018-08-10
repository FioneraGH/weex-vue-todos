import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

import curTodoInfo from './module/CurTodoInfo'

/* eslint-disable no-undef */
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

const store = new Vuex.Store({
  state: {
    todos: {
      // 'id': {
      //   name:'name',
      //   active:true,
      //   done:true
      // }
    }
  },
  actions,
  mutations,

  modules: {
    curTodoInfo
  },

  getters: {
    allTodos(state, getters) {
      const { todos } = state
      return Object.keys(todos).reduce((acc, key) => {
        acc.push({
          ...todos[key],
          todoId: key
        })
        return acc
      }, [])
    }
  }
})

export default store
