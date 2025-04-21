import { defineStore } from 'pinia'
// const todos = [
//     { title: 'a', done: true, id: 1, createdAt: '11/06/2023', priority: 'High' },
//     { title: 'b', done: false, id: 2, createdAt: '11/07/2023', priority: 'Low' },
//     { title: 'c', done: true, id: 3, createdAt: '11/08/2023', priority: 'Medium' },
//     { title: 'd', done: false, id: 4, createdAt: '11/09/2023', priority: 'High' },
//   ]

export const useTodoStore = defineStore('todo-store', {
  state() {
    return {
      todo: [],
      loading: true,
      errMeg: '',
    }
  },
  getters: {
    sorted: (state) => {
      return state.todo.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    },
    done: (state) => {
      return state.todo.filter((todo) => todo.done)
    },
    todoCount() {
      return this.todo.length
    },
  },

  actions: {
    addTodo: {},
    getTodo() {
      fetch('http://localhost:3000/todo')
        .then((res) => res.json())
        .then((data) => {
          this.todo = data
          this.loading = false
        })
        .catch((err) => {
          this.errMeg = err
          this.loading = false
        })
    },
    deleteTodo(id) {
      this.todo = this.todo.filter((todo) => todo.id !== id)
      fetch(`http://localhost:3000/todo/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          this.todo = this.todo.filter((todo) => todo.id !== id)
        })
        .catch((err) => {
          this.errMeg = err
        })
    },
    updateTodo(id) {
      const todo = this.todo.find((todo) => todo.id === id)

      todo.done = !todo.done

      fetch(`http://localhost:3000/todo/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ done: todo.done }),
      })
        .then((res) => res.json())
        .then((data) => {
          this.todo = this.todo.filter((todo) => todo.id !== this.id)
        })
        .catch((err) => {
          this.errMeg = err
        })
    },
    addTodo(todo) {
      const NewTodo = {
        id: +Date.now().toString(),
        title: todo.title,
        preparedAt: todo.preparedAt,
        done: false,
        createdAt: new Date().toString(),
      }

      // this.todo.push(NewTodo)
      fetch(`http://localhost:3000/todo`, {
        method: 'POST',
        body: JSON.stringify(NewTodo),
      })
        .then((res) => res.json())
        .then((data) => {
          this.todo.push(data)
        })
        .catch((err) => {
          this.errMeg = err
        })
    },
  },
})
