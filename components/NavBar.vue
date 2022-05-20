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
  eleInfo.value.length = 0
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

function resize() {
  collectEleInfo()
  boxToElePosition(route.name as string)
}
onMounted(() => {
  collectEleInfo()
  dep()
  window.addEventListener('resize', resize)
})
onUnmounted(() => {
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <div
    ref="navRef"
    class="sticky top-0 flex flex-col justify-center items-center gap-8 pb-10% pr-2 w-80px h-screen border-r border-gray-200 text-xl"
  >
    <div class="absolute top-25px left-50% translate-x--50% w-32px h-32px">
      <img src="/logo.png" alt="logo">
    </div>
    <nuxt-link class="icon-primary" to="/" data-key="index" title="Home">
      <div class="i-ri-home-smile-line" />
    </nuxt-link>
    <nuxt-link class="icon-primary" to="/plans" data-key="plans" title="Plans">
      <div class="i-ri-todo-line" />
    </nuxt-link>
    <nuxt-link class="icon-primary" to="/weekly" data-key="weekly" title="Weekly">
      <div class="i-ic-baseline-menu-book" />
    </nuxt-link>
    <!-- <nuxt-link class="icon-primary" to="/bookmarks" data-key="bookmarks" title="Bookmarks">
    <div class="i-ic-round-bookmarks" />
  </nuxt-link> -->
    <nuxt-link class="icon-primary" to="/team-member" data-key="team-member" title="Team member">
      <div class="i-ri-team-line" />
    </nuxt-link>
    <div ref="boxRef" class="absolute top-2 right-0 translate-x-50% w-2 h-2 bg-light-900 rounded-full" />
  </div>
</template>
