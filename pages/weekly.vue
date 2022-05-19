<script setup lang="ts">
const weeklyOptions = {
  title: '周刊',
  subtitle: 'Weekly',
  description: '记录每周值得分享的内容，周一发布。',
  btnLink: 'https://github.com/developer-plus/weekly/issues/new/choose',
  btnText: '周刊投稿',
  githubLink: 'https://github.com/developer-plus/weekly'
}

const { data: weeklyData } = await useFetch('/api/weekly')
</script>

<template>
  <page-wrapper v-bind="weeklyOptions">
    <template v-for="weekly in weeklyData.data" :key="weekly.link">
      <NuxtLink :to="weekly.link" target="_blank">
        <button class="flex justify-between items-center py-12px pr-48px w-full text-lg btn-primary">
          <div>{{ weekly.title }}</div>
          <div>{{ weekly.time }}</div>
        </button>
      </NuxtLink>
    </template>
  </page-wrapper>
</template>
