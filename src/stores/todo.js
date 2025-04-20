import { defineStore } from 'pinia'
const todos = [
    { title: 'a', done: true, id: 1, createdAt: '11/06/2023', priority: 'High' },
    { title: 'b', done: false, id: 2, createdAt: '11/07/2023', priority: 'Low' },
    { title: 'c', done: true, id: 3, createdAt: '11/08/2023', priority: 'Medium' },
    { title: 'd', done: false, id: 4, createdAt: '11/09/2023', priority: 'High' },
  ]
export const useTodoStore = defineStore('todo-store', {
  state() {
    return {
      todo: [...todos],
      loading: true,
      errMeg: '',
    }
  },
  getters: {
    sorted: (state) => {
      return state.todo.sort((a, b) =>new Date(b.createdAt) - new Date(a.createdAt))
    },
    done: (state) => {
    return  state.todo.filter((todo) => todo.done)
    },
  },

  actions: {
    addTodo: {},
    getTodo:{}
 
  },
})