<style scoped>
.container {
  height: 100%;
}

.todos-list {
  overflow: hidden;
}

.todo-cell {
  margin-bottom: 3px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #DDDDDD;
  background-color: #FFFFFF;
}
</style>

<template>
  <div class="container"
       append="tree">
    <app-header></app-header>
    <list class="todos-list">
      <cell class="todos-cell"
            v-for="todo in todos"
            :key="todo.todoId"
            append="tree">
        <todo :todo="todo"
              :todoId="todo.todoId"></todo>
      </cell>
    </list>
  </div>
</template>

<script>
import AppHeader from '../../components/app-header.vue'
import Todo from '../../components/todo.vue'

export default {
  components: { AppHeader, Todo },
  computed: {
    todos() {
      const todos = this.$store.getters.activeTodos
      return Object.keys(todos).reduce((acc, key) => {
        acc.push({
          ...todos[key],
          todoId: key
        })
        return acc
      }, []).sort((a, b) => {
        return a.done - b.done
      })
    }
  },
  mounted() {
    this.$store.dispatch('LOAD_TODOS')
  }
}

</script>
