<script setup>
useHead({
  title: 'developer-plus',
  meta: [
    { name: 'description', content: '来源于开发者，服务于开发者。' }
  ],
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/logo.png'
    }
  ]
})
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
