<style scoped>
.cell-item {
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
}

.todo-name {
  font-size: 33px;
  color: #404040;
  line-height: 62px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 20px;
}

.toggle {
  border-width: 2px;
  border-style: solid;
  border-color: #2c3e50;
  background-color: #35495e;
  height: 70px;
  width: 170px;
  border-radius: 8px;
  line-height: 70px;
  color: white;
  text-align: center;
  right: 0px;
  font-size: 32px;
}
</style>

<template>
  <div class="cell-item">
    <text class="todo-name"
          ref="name"
          :style="textStyle">{{todo.name}}</text>
    <text class="toggle"
          :style="buttonStyle"
          @click="toggleDone">{{isDone}}</text>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    todoId: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleDone() {
      this.$store.dispatch('DONE_TODO', {
        key: this.todoId,
        done: !this.todo.done
      })
    }
  },
  computed: {
    isDone() {
      return this.todo.done ? 'undo' : 'done'
    },
    textStyle() {
      if (this.todo.done) {
        return {
          'textDecoration': 'line-through',
          'fontStyle': 'italic',
          'color': '#a0a0a0'
        }
      } else {
        return {
          'textDecoration': 'none',
          'fontStyle': 'normal',
          'color': '#404040'
        }
      }
    },
    buttonStyle() {
      if (this.todo.done) {
        return {
          'color': '#a0a0a0',
          'backgroundColor': 'white',
          'borderColor': 'white',
          'textDecoration': 'underline'
        }
      } else {
        return {
          'color': 'white',
          'backgroundColor': '#35495e',
          'borderColor': '#2c3e50',
          'textDecoration': 'none'
        }
      }
    }
  }
}
</script>
