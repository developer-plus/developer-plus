<script setup lang="ts">
type TypedString = string | {
  title: string
  // 停顿的字符数
  stop: number | number[]
}

interface Props {
  // 展示的文字
  strings: TypedString[]
}

const props = defineProps<Props>()

let displayStr = $ref('')

onMounted(() => {

})

let currentIndex = 0

function init() {
  if (currentIndex === props.strings.length)
    resetIndex()
  const currentStrEl = props.strings[currentIndex]
  displayStr = typeof currentStrEl === 'string' ? currentStrEl : currentStrEl.title
}

init()

function currentEnd() {

}

function resetIndex() {
  currentIndex = 0
}
</script>

<template>
  <div font="monospace" position="relative" inline="flex" width="fit-content" class="typewriter">
    <span
      v-for="(s, i) in displayStr" :key="i" class="inline-block" overflow="hidden" w="0ch" font="weight-600"
      text="center"
    >{{ s }}</span>
  </div>
</template>

<style scoped>
.typewriter::after {
  content: "";
  display: inline;
  position: absolute;
  width: 2px;
  height: 2ch;
  top: 9%;
  background-color: #000;
  border-radius: 2px;
  right: -0.5ch;
}

.typewriter::after {
  animation: 1.1s cursor steps(2, jump-none) infinite;
}

.typewriter span {
  animation: 0.1s text-in ease-in-out forwards;
  animation-delay: var(--delay);
}

@keyframes text-in {
  from {
    width: 0ch;
  }

  to {
    width: 2ch;
  }
}

@keyframes text-out {
  from {
    width: 2ch;
  }

  to {
    width: 0ch;
  }
}

@keyframes cursor {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
