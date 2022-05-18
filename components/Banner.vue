<script lang="ts" setup>
interface Banner {
  title: string
  link: string
}

const Announcement = await $fetch<Banner>('/api/banner')
function open() {
  window.open(Announcement.link)
}
</script>

<template>
  <div
    class="box" w-full flex="~" justify="center" items="center" text-bold h-40px text-19px rounded-10px
    bg="gray-200/70" dark:bg="gray-200/20" dark:text-white cursor-pointer transition="all" text-black select-none
    mt-20px @click="open"
  >
    {{ Announcement.title }}
  </div>
</template>
