<script setup lang="ts">
const options = {
  title: '关于我们',
  subtitle: 'This is the about page',
  description: 'This is the about page',
  btnLink: 'https://github.com/Hongbusi/developer-plus',
  btnText: '按钮',
  githubLink: 'https://github.com/Hongbusi/developer-plus'
}
</script>

<template>
  <page-wrapper v-bind="options">
    关于我们
  </page-wrapper>
</template>
