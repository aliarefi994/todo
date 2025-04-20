<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/add">New Todo</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

|<style  scoped>
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
