<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  description?: string
  btnLink?: string
  btnText?: string
  githubLink?: string
}

defineProps<Props>()
</script>

<template>
  <div>
    <div class="flex justify-between items-center mt-32px">
      <div class="flex items-end">
        <h1 class="mr-8px text-3xl">
          {{ title }}
        </h1>
        <span class="opacity-70">{{ subtitle }}</span>
      </div>
      <div v-if="githubLink || btnLink" class="flex items-center">
        <a v-if="btnLink" class="mr-12px btn-primary-small" :href="btnLink" target="_blank">
          {{ btnText }}
        </a>
        <a v-if="githubLink" class="icon-primary i-carbon-logo-github" :href="githubLink" target="_blank" />
      </div>
    </div>
    <p v-if="description" class="mt-6px opacity-70">
      {{ description }}
    </p>
    <div class="mt-24px">
      <slot />
    </div>
  </div>
</template>
