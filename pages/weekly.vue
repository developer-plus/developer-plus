<script setup lang="ts">
const weeklyOptions = {
  title: '周刊',
  subtitle: 'Weekly',
  description: '记录每周值得分享的内容，周一发布。',
  btnLink: 'https://github.com/developer-plus/weekly/issues',
  btnText: '周刊投稿',
  githubLink: 'https://github.com/developer-plus/weekly'
}

const { data: weeklyData } = await useFetch('/api/weekly')
</script>

<template>
  <page-wrapper v-bind="weeklyOptions">
    <template v-for="weekly in weeklyData.data" :key="weekly.link">
      <NuxtLink :to="weekly.link" target="_blank">
        <button
          btn-primary
          w-full
          h-65px
          text-24px
          my-10px
          pl-46px
          pr-70px
          justify-between
          items-center
        >
          <div>{{ weekly.title }}</div>
          <div>{{ weekly.time }}</div>
        </button>
      </NuxtLink>
    </template>
  </page-wrapper>
</template>
