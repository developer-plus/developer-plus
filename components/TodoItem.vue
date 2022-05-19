<script setup lang="ts">
import { timeFormat } from '~~/utils'

interface Props {
  number: number
  time: string
  title: string
  locked: boolean
  state: string
  url: string
  avatar?: string
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  number: 0,
  time: '',
  title: '',
  locked: false,
  state: '',
  url: '',
  avatar: '',
  name: ''
})

const calcTimeString = computed(() => {
  const timestamp = new Date(props.time).getTime()
  return timeFormat(timestamp)
})

function goToIssuePage() {
  window.open(props.url)
}
</script>

<template>
  <div
    class="flex flex-row justify-between items-center gap-2 py-2 px-4 truncate cursor-pointer rounded-sm text-dark-300 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-300"
    @click="goToIssuePage"
  >
    <div v-if="!props.avatar" class="dark:i-fluent-checkbox-unchecked-24-regular i-fluent-checkbox-unchecked-24-regular text-xl" />
    <img v-if="props.avatar" :src="props.avatar" :alt="props.name" class="w-8 h-8 rounded-full">
    <div class="flex flex-col gap-1 w-full text-left">
      <div class="line-clamp-1">
        {{ props.title }}
      </div>
      <div class="flex justify-between items-center gap-2">
        <span class="text-xs text-gray-400">{{ calcTimeString }}</span>
        <div class="text-xs text-gray-400">
          <span v-if="!props.name" class="text-green-500/60">暂未领取</span>
          <span v-if="props.name">
            <span class="font-bold">{{ props.name }}</span>
            领取
          </span>
        </div>
      </div>
    </div>
    <div class="dark:i-eva-external-link-outline i-eva-external-link-outline text-gray-600" />
  </div>
</template>
