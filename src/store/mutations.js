const uuidV4 = require('uuid/v4')

export function SET_TODOS(state, { todos }) {
  Vue.set(state, 'todos', todos)
}

export function ADD_TODO(state, { name }) {
  Vue.set(state.todos, uuidV4(), { name, active: true, done: false })
}

export function DONE_TODO(state, { key, done }) {
  Vue.set(state.todos[key], { done })
}
