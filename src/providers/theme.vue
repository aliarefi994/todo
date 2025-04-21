<script setup>
import { provide, ref } from 'vue'

const theme = ref('light')
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

provide('theme', theme)
provide('toggleTheme', toggleTheme)
</script>
<template>
  <div :class="theme">
    <slot ></slot>
  </div>
</template>

<style lang="scss" scoped>
.light {
  background-color: #fff;
  color: #333;
  height: 100%;
}
.dark {
  background-color: #333;
  color: #fff;
  height: 100%;
}
</style>
