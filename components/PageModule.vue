<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="mt-36px">
    <h2 v-if="title" class="mb-16px text-2xl">
      {{ title }}
    </h2>
    <slot />
  </div>
</template>
