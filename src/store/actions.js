/* eslint-disable no-undef */
const storage = weex.requireModule('storage')

export function LOAD_TODOS({ commit, dispatch, state }) {
  storage.getItem('todos', todos => {
    if (todos.result !== 'failed') {
      todos = JSON.parse(todos.data) || {}
      commit('SET_TODOS', { todos })
    }
  })
}

export function ADD_TODO({ commit, dispatch, state }, { name }) {
  commit('ADD_TODO', { name })
  storage.setItem('todos', JSON.stringify(state.todos))
}

export function DELETE_TODO({ commit, dispatch, state }, { key, name }) {
  commit('DELETE_TODO', { key, name })
  storage.setItem('todos', JSON.stringify(state.todos))
}

export function MODIFY_TODO({ commit, dispatch, state }, { key, name }) {
  commit('MODIFY_TODO', { key, name })
  storage.setItem('todos', JSON.stringify(state.todos))
}

export function DONE_TODO({ commit, dispatch, state }, { key, done }) {
  commit('DONE_TODO', { key, done })
  storage.setItem('todos', JSON.stringify(state.todos))
}
