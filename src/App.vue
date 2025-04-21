<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useTodoStore } from '@/stores/todo'
import ThemeProvider from '@/providers/theme.vue'
import ThemeDisplay from '@/components/ThemeDisplay.vue'

const todoStore = useTodoStore()
todoStore.getTodo()
</script>

<template>
  <ThemeProvider>
    <header>
      <ThemeDisplay />
      <nav>
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/add">New Todo</RouterLink>
      </nav>
    </header>
    <RouterView />
  </ThemeProvider>
</template>

|
<style scoped>
header {
  background-color: #b3e5fc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

.nav-link {
  margin-right: 1rem;
}
</style>
