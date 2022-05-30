<script setup lang="ts">
import { isDark } from '#imports'

function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <div class="icon-primary dark:i-carbon-moon i-carbon-sun" @click="toggleDark" />
</template>
