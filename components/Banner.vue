<script lang="ts" setup>
import animejs from 'animejs'
import { Announcement } from '~/data/Home/index.json'

const str = Announcement.title

enum Theme {
  dark = '#000',
  light = '#fff'
}

let currentTheme = $ref(Theme.dark)
const getAnimationColor = () => [currentTheme, '#ff6498', currentTheme]

const color = useColorMode()
watch(color, (val) => {
  currentTheme = val.value === 'dark' ? Theme.light : Theme.dark
})
watch(() => currentTheme, () => {
  animejs.set('.box span', {
    color: getAnimationColor()
  })
})

function initAnimate() {
  const c = color.value === 'dark' ? Theme.light : Theme.dark
  const defaultTheme = [c, '#ff6498', c]
  animejs({
    targets: '.box span',
    color: defaultTheme,
    delay(_, i) {
      return i * 50
    },
    loop: true,
    easing: 'linear'
  })
}

onMounted(() => {
  initAnimate()
})

function open() {
  window.open(Announcement.link)
}
</script>

<template>
  <div
    class="box" w-full flex="~" justify="center" items="center" text-bold h-40px text-19px rounded-10px
    bg="gray-200/70" dark:bg="gray-200/20" dark:text-white cursor-pointer hover:transform="scale-95" transition="all"
    text-black select-none mt-20px @click="open"
  >
    <span v-for="item in str.split('')" :key="item">
      {{ item }}
    </span>
  </div>
</template>
