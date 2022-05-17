<script setup lang="ts">
const color = useColorMode()
function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="icon-btn dark:i-carbon-moon i-carbon-sun" @click="toggleDark" />
</template>
