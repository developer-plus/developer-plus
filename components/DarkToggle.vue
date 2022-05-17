<script setup lang="ts">
const color = useColorMode()
function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
const colorIcon = useState('themeIconColor', () => '#000')
watch(() => color.value, (newValue) => {
  if (newValue === 'light')
    colorIcon.value = '#000'
  else
    colorIcon.value = '#fff'
})
</script>

<template>
  <button class="!outline-none" @click="toggleDark">
    <div class="dark:i-carbon-moon i-carbon-sun" />
  </button>
</template>
