<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core'
interface Props {
  // 展示的文字
  strings: string[]
  // 停留的毫秒数
  delay: number
  // 每个字展示的时间
  time: number
  // 每个字的宽度，单位是 ch
  characterWidth: number
}
const props = defineProps<Props>()
const characterWidthWithUnit = $computed(() => `${props.characterWidth}ch`)
let currentIndex = $ref(0)
// 为什么要给一个 landed，因为 Vue 存在 diff，这里为了不让 type-writer 被 diff，所以要全量更新
// 而因为 diff 的问题，所以第二次其实是顺序反过来的，这里做一下标识
let isLanded = false
const str = $computed(() => props.strings[currentIndex])
const charRef = $ref<HTMLElement[]>()
const typeWriterRef = $ref<HTMLElement>()

function setDelay(charRef: HTMLElement[], cb?: (e: HTMLElement) => void) {
  charRef.forEach((charEl, i) => {
    cb && cb(charEl)
    charEl.style.setProperty('--delay', `${(i + 1) * props.time}s`)
  })
}

function handleAnimationEnd(target: HTMLElement, cb: (e: AnimationEvent, cb: () => void) => void) {
  target.addEventListener('animationend', function fn(e) {
    cb(e, () => {
      target.removeEventListener('animationend', fn)
    })
  })
}

async function handleNext() {
  if (currentIndex === props.strings.length - 1)
    currentIndex = 0
  else currentIndex += 1
  if (!isLanded)
    isLanded = true
  init(typeWriterRef, charRef)
}

async function init(typeWriterRef: HTMLElement, charRef: HTMLElement[]) {
  await nextTick()
  typeWriterRef.classList.remove('ended')
  setDelay(!isLanded ? charRef : charRef.reverse(), (e) => {
    e.classList.remove('end')
    e.classList.add('init')
  })
  handleAnimationEnd(typeWriterRef, (e, cb) => {
    if (e.target === charRef[charRef.length - 1]) {
      typeWriterRef.classList.add('ended')
      cb()
      reverse(typeWriterRef, charRef)
    }
  })
}

async function reverse(typeWriterRef: HTMLElement, charRef: HTMLElement[]) {
  await promiseTimeout(props.delay)
  typeWriterRef.classList.remove('ended')
  setDelay(charRef.reverse(), (e) => {
    e.style.width = characterWidthWithUnit
    e.classList.remove('init')
    e.classList.add('end')
  })
  handleAnimationEnd(typeWriterRef, (e, cb) => {
    if (e.target === (charRef[charRef.length - 1])) {
      cb()
      typeWriterRef.classList.add('ended')
      handleNext()
    }
  })
}

onMounted(() => {
  init(typeWriterRef, charRef)
})

const color = useColorMode()
const $color = $computed(() => color.value === 'dark' ? '#fff' : '#000')
</script>

<template>
  <div ref="typeWriterRef" class="type-writer" font-mono relative>
    <span v-for="(s, i) in str" :key="i + s + str" ref="charRef" inline-block overflow-hidden w-0ch>
      {{ s }}
    </span>
  </div>
</template>

<style scoped>
.type-writer span {
  --delay: 10s;
}

.type-writer span.init {
  animation: text-in 0.1s ease-in-out forwards;
  animation-delay: var(--delay);
}

.type-writer span.end {
  animation: text-out 0.1s ease-in-out forwards;
  animation-delay: var(--delay);
}

.type-writer::after {
  content: '';
  display: inline-block;
  position: absolute;
  width: 0.3rem;
  height: 54px;
  line-height: 2rem;
  background-color: v-bind("$color");
  border-radius: 2px;
  right: -10px;
}

.type-writer.ended::after {
  animation: cursor 1.1s steps(2, jump-none) infinite;
}

@keyframes cursor {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes text-in {
  from {
    width: 0ch;
  }

  to {
    width: v-bind("characterWidthWithUnit");
  }
}

@keyframes text-out {
  from {
    width: v-bind("characterWidthWithUnit");
  }

  to {
    width: 0ch;
  }
}
</style>
