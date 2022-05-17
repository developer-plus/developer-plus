<script setup lang="ts">
interface Props {
  number: number
  time: string
  title: string
  locked: boolean
  url: string
  state: string
}

const props = withDefaults(defineProps<Props>(), {
  number: 0,
  time: '',
  title: '',
  locked: false,
  url: '',
  state: ''
})

function goToIssuePage() {
  window.open(props.url)
}
</script>

<template>
  <div class="todo-item flex flex-row justify-between items-center gap-2 py-2 px-4 cursor-pointer bg-light-500 text-dark-300 hover:bg-gray-200" @click="goToIssuePage">
    <div v-if="!props.locked" class="dark:i-fluent-checkbox-unchecked-24-regular i-fluent-checkbox-unchecked-24-regular text-xl" />
    <div v-if="props.locked" class="dark:i-fluent-checkbox-checked-24-filled i-fluent-checkbox-checked-24-filled text-xl" />
    <div class="flex flex-col gap-1 w-full text-left">
      <span>{{ props.title }}</span>
      <span class="text-xs text-gray-400">{{ props.time }}</span>
    </div>
    <div class="dark:i-eva-external-link-outline i-eva-external-link-outline text-gray-600" />
  </div>
</template>
