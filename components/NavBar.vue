<script lang="ts" setup>
import animejs from 'animejs'

interface EleInfo {
  mid: number
  el: Element
  key: string
}

const navRef = ref<HTMLElement | null>(null)
const boxRef = ref<HTMLElement | null>(null)
const eleInfo = ref<EleInfo[]>([])
const route = useRoute()

function collectEleInfo() {
  const { children } = navRef.value
  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    const { height, top } = child.getBoundingClientRect()
    eleInfo.value.push({
      mid: top + height / 2,
      el: child,
      key: child.getAttribute('data-key')
    })
  }
}
function dep() {
  watch(() => route.name, (val) => {
    boxToElePosition(val as string)
  }, { immediate: true })
}
function boxToElePosition(name: string) {
  const info = eleInfo.value.find(it => it.key === name)
  const { height } = boxRef.value.getBoundingClientRect()
  animejs({
    targets: boxRef.value,
    top: info.mid - height / 2
  })
}
onMounted(() => {
  collectEleInfo()
  dep()
})
</script>

<template>
  <div ref="navRef" class="sticky top-0 w-80px h-screen border-r border-gray-200 flex flex-col justify-center items-end pr-2 gap-8">
    <nuxt-link to="/" data-key="index">
      <icon-home />
    </nuxt-link>
    <nuxt-link to="/plans" data-key="plans">
      <icon-todo />
    </nuxt-link>
    <nuxt-link to="/weekly" data-key="weekly">
      <icon-weekly />
    </nuxt-link>
    <nuxt-link to="/bookmarks" data-key="bookmarks">
      <icon-book-marks />
    </nuxt-link>
    <nuxt-link to="/about" data-key="about">
      <icon-auto />
    </nuxt-link>
    <div ref="boxRef" class="w-2 h-2 bg-light-900 rounded-full absolute top-2 right-[-0.3rem]" />
  </div>
</template>
