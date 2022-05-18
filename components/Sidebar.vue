<script setup lang="ts">
const coreMembers = await $fetch('/api/core-members')
const friendLink = await $fetch('/api/friend-link')
</script>

<template>
  <div class="px-32px py-24px w-380px min-h-screen border-l border-gray-200">
    <div class="flex justify-between">
      <h2 class="text-2xl">
        developer-plus
      </h2>
      <div class="flex items-center text-lg">
        <a class="icon-primary i-carbon-logo-github mr-8px" href="https://github.com/developer-plus" target="_blank" />
        <dark-toggle />
      </div>
    </div>

    <div class="mt-16px opacity-70">
      来源于开发者，服务于开发者。
    </div>

    <div class="mt-36px">
      <h3 class="text-xl">
        核心成员
      </h3>

      <div class="flex justify-between flex-wrap mt-16px">
        <a v-for="(member, index) in coreMembers" :key="index" :href="member.link" :title="member.name">
          <div class="overflow-hidden mt-8px w-56px h-56px cursor-pointer border-rounded-28px bg-black">
            <img class="w-full h-full" :src="member.avatar" :alt="member.name">
          </div>
        </a>
      </div>
    </div>

    <div class="mt-36px">
      <h3 class="text-xl">
        快速入口
      </h3>

      <div class="flex justify-between flex-wrap mt-16px">
        <a class="btn-primary mt-8px" href="https://github.com/developer-plus/weekly/issues" target="_blank">
          周刊投稿
        </a>
        <a class="btn-primary mt-8px" href="https://github.com/developer-plus/plans/issues/new?assignees=&labels=pr+welcome&template=create.yml&title=%E3%80%90TODO%E3%80%91" target="_blank">
          新增计划
        </a>
        <a class="btn-primary mt-8px" href="https://github.com/developer-plus/developer-plus/issues/23" target="_blank">
          加入我们
        </a>
      </div>
    </div>

    <div class="mt-36px">
      <h3 class="text-xl">
        友情链接
      </h3>

      <div class="mt-16px">
        <a v-for="(item, index) in friendLink" :key="index" :href="item.link" target="_blank">
          <div class="px-8px py-8px mt-8px bg-primary">
            <h2>{{ item.title }}</h2>
            <p class="opacity-70">{{ item.description }}</p>
          </div>
        </a>
      </div>
    </div>

    <footer class="mt-42px text-sm opacity-70">
      Copyright © 2022 developer-plus, made with 💗.
    </footer>
  </div>
</template>
