<script setup>
import TodoItem from '@/components/TodoItem.vue'
import Wrapper from '@/components/Wrapper.vue'
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
const todos = todoStore.done
</script>

<template>
  <div class="header">
    <h3>todo</h3>
    <button>show todo</button>
  </div>

  <div v-for="todo in todos" :key="todo.id">
    <Wrapper>
      <TodoItem :todo="todo" />
    </Wrapper>
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      animation: spin 1s linear infinite;
    }
  }

  button {
    color: #fff;

    background-color: #007bff;
    padding: 4px 15px;
    border-radius: 5px;
    &:hover {
      background-color: #0069d9;
      cursor: pointer;
    }
  }
}
</style>
