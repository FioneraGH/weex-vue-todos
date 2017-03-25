const uuidV4 = require('uuid/v4')

export function SET_TODOS(state, { todos }) {
  Vue.set(state, 'todos', todos)
}

export function ADD_TODO(state, { name }) {
  Vue.set(state.todos, uuidV4(), { name, active: true, done: false })
}

export function DELETE_TODO(state, { key }) {
  let todos = state.todos
  let result = Object.keys(todos).filter(todoId => {
    return todoId !== key
  }).reduce((acc, key) => {
    acc[key] = todos[key]
    return acc
  }, {})
  Vue.set(state, 'todos', result)
}

export function MODIFY_TODO(state, { key, name }) {
  Vue.set(state.todos, key, { ...state.todos[key], name })
}

export function DONE_TODO(state, { key, done }) {
  Vue.set(state.todos, key, { ...state.todos[key], done })
}
