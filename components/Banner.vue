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
  <div class="flex justify-center items-center mt-20px py-8px text-xl bg-primary cursor-pointer transition-all select-none" @click="open">
    <div class="mr-8px text-lg i-carbon-notification" />
    {{ Announcement.title }}
  </div>
</template>
