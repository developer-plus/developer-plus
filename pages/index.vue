<script setup lang="ts">
// import Data from
</script>

<template>
  <div class="mt-5">
    <div flex="~" justify="start" items="baseline">
      <div text="48px">
        Developer Plus
      </div>
      <div text="20px gray-500" ml="20px">
        源于开发者，服务于开发者
      </div>
    </div>
    <div mt="20px">
      <div text="36px" flex="~" justify="start">
        Hi，你好 <div class="emoji-handshake" ml="10px">
          👋
        </div>
      </div>
    </div>
    <div mt="20px" text="36px">
      我们是
      <!-- <TypeWriter /> -->
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
