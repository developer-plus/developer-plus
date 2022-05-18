<script setup lang="ts">
import type { Props } from '~/components/TypeWriter.vue'

const TypeWriterData = await $fetch('/api/home/type-write')
const TypeWriteProps: Props = {
  time: 0.1,
  delay: 1500,
  strings: TypeWriterData
}
</script>

<template>
  <div class="element" />
  <div class="mt-5">
    <div flex="~" justify="start" items="baseline">
      <div text="60px">
        Developer Plus
      </div>
    </div>
    <div mt="20px">
      <div text="32px" flex="~" justify="start">
        Hi，你好 <div class="emoji-handshake" ml="10px">
          👋
        </div>
      </div>
    </div>
    <div mt="20px" text="32px">
      <span font-mono w-2ch>我们</span>
      <type-writer inline-flex v-bind="TypeWriteProps" />
    </div>
  </div>
</template>

<style>
.emoji-handshake {
  animation: handshake 3s ease-in-out infinite;
}

@keyframes handshake {
  33% {
    transform: rotate(40deg);
  }

  66% {
    transform: rotate(-20deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>
