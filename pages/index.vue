<script setup lang="ts">
import { useFireworks } from '~~/composables/useFireworks'
const TypeWriterData = await $fetch('/api/home/type-write')
const TypeWriteProps = {
  time: 0.1,
  delay: 1500,
  strings: TypeWriterData,
  characterWidth: 1.6
}

const Projects = await $fetch('/api/home/projects')
function goToProject(link: string) {
  window.open(link)
}

onMounted(() => {
  useFireworks()
})
</script>

<template>
  <div>
    <div class="element" />
    <div class="mt-40px">
      <div class="text-6xl text-center">
        developer plus
      </div>
      <div class="mt-32px px-36px py-26px bg-black text-white rounded">
        <div class="text-3xl">
          Hi，你好 <span class="ml-10px">👋</span>
        </div>
        <div mt="20px" text="32px">
          <span font-mono w-2ch>我们</span>
          <type-writer inline-flex v-bind="TypeWriteProps" />
        </div>
      </div>
    </div>

    <page-module title="进行中的项目">
      <div flex="~ wrap" w-full justify="between">
        <div
          v-for="p in Projects" :key="p.link" bg-primary w="48%" mt-4 px-3 py-3 h-100px cursor-pointer
          @click="goToProject(p.link)"
        >
          <div text="18px">
            {{ p.name }}
          </div>
          <div text="12px" mt-4 line-clamp-2>
            <a :title="p.description" @click.prevent>{{ p.description }}</a>
          </div>
        </div>
      </div>
    </page-module>
  </div>
</template>
