<script setup lang="ts">
const options = {
  title: '书签',
  subtitle: 'Bookmarks',
  description: '收录有趣的网站。',
  githubLink: 'https://github.com/developer-plus/bookmarks'
}
</script>

<template>
  <page-wrapper v-bind="options">
    <div class="flex flex-wrap justify-between">
      <div
        v-for="i in 21"
        :key="i"
        class="px-16px py-8px mb-16px w-220px bg-primary cursor-pointer hover:shadow-inset"
      >
        <div class="flex items-center">
          <div class="w-32px h-32px mr-4px">
            <img src="https://cn.vuejs.org/images/logo.svg" alt="">
          </div>
          <div class="text-2xl">
            Vue.js
          </div>
        </div>
        <div class="text-xs my-10px">
          Vue是一个响应式JavaScript框架，是最流行的前端框架之一
        </div>
        <div class="flex justify-between">
          <div class="flex">
            <div
              class="icon-primary bg-gray-300 dark:bg-gray-100/60 mr-8px text-xs w-30px text-center"
            >
              CN
            </div>
            <div
              class="icon-primary bg-gray-300 dark:bg-gray-100/60 mr-8px text-xs w-30px text-center"
            >
              EN
            </div>
          </div>
          <a
            class="icon-primary i-carbon-logo-github mr-8px"
            href="https://github.com/developer-plus"
            target="_blank"
          />
        </div>
      </div>
    </div>
  </page-wrapper>
</template>
