<style scoped>
.header {
  position: relative;
  height: 120px;
  background-color: #42b983;
}

.title-menu {
  position: relative;
  width: 150px;
  height: 50px;
  top: 35px;
  left: 35px;
}

.title {
  height: 50px;
  width: 150px;
  color: white;
  text-align: center;
  line-height: 60px;
  font-size: 40px;
}

.nav {
  position: absolute;
  right: 35px;
  top: 20px;
  height: 80px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}

.button {
  border-width: 2px;
  border-style: solid;
  border-color: #2c3e50;
  background-color: #35495e;
  height: 80px;
  width: 120px;
  line-height: 80px;
  border-radius: 8px;
  color: white;
  text-align: center;
  font-size: 32px;
}
</style>

<template>
  <div class="header">
    <div class="title-menu"
         @click="jump('/')">
      <text class="title">TODO {{count}}</text>
    </div>
    <div class="nav">
      <text class="button"
            @click="openAddTodo()">ADD</text>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
const modal = weex.requireModule('modal')

export default {
  computed: {
    count() {
      const todos = this.$store.getters.allTodos
      return todos.filter(todo => {
        return !todo.done
      }).length
    }
  },
  methods: {
    openAddTodo(event) {
      modal.prompt({
        message: 'Add New:'
      }, value => {
        if (value.result === 'OK' && value.data.length > 0) {
          this.$store.dispatch('ADD_TODO', {
            name: value.data
          })
        }
      })
    }
  }
}
</script>
