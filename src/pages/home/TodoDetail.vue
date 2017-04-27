<style scoped>
.container {
  height: 100%;
}

.detail-body {
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
}

.detail-info {
  font-size: 33px;
  color: #404040;
  line-height: 62px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.detail-operation {
  margin-top: 500px;
  flex-direction: row;
  justify-content: space-between;
}

.button {
  border-width: 2px;
  border-style: solid;
  border-color: #2c3e50;
  background-color: #35495e;
  margin: 20px;
  height: 70px;
  width: 140px;
  border-radius: 8px;
  line-height: 70px;
  color: white;
  text-align: center;
  right: 0px;
  font-size: 32px;
}
</style>

<template>
  <div class="container"
       append="tree">
    <app-header></app-header>
    <div class="detail-body">
      <text class="detail-info">{{todo.name}}</text>
      <div class="detail-operation">
        <text class="button"
              v-if="isDone"
              @click="deleteTodo">Delete</text>
        <text class="button"
              @click="modifyTodo">Modify</text>
      </div>
    </div>
    </list>
  </div>
</template>

<script>
import AppHeader from '../../components/app-header.vue'

/* eslint-disable no-undef */
const modal = weex.requireModule('modal')

export default {
  components: { AppHeader },
  computed: {
    todo() {
      return this.$store.state.todos[this.$route.params.todoId] || { name: 'Deleted' }
    },
    isDone() {
      return this.todo.done
    }
  },
  methods: {
    modifyTodo() {
      modal.prompt({
        message: 'Modify Current:'
      }, value => {
        if (value.result === 'OK' && value.data.length > 0) {
          this.$store.dispatch('MODIFY_TODO', {
            key: this.$route.params.todoId,
            name: value.data
          })
        }
      })
    },
    deleteTodo() {
      this.$router.back()
      this.$store.dispatch('DELETE_TODO', {
        key: this.$route.params.todoId
      })
    }
  }
}

</script>
