<script setup lang="ts">
import type { ITeamMember } from '~/types/team-member'

const options = {
  title: '团队成员',
  subtitle: 'Team member',
  description: 'developer-plus 成员以及开源社区贡献者，其中一些选择在下面进行介绍。',
  btnText: '加入我们',
  btnLink: 'https://github.com/developer-plus/developer-plus/issues/23'
}

const members = await $fetch<ITeamMember[]>('/api/team-members')
</script>

<template>
  <page-wrapper v-bind="options">
    <page-module title="核心成员">
      <div class="flex flex-wrap justify-between">
        <div
          v-for="(member, index) in members" :key="index"
          class="flex justify-between px-24px py-16px mt-16px w-340px bg-primary"
        >
          <div class="overflow-hidden mr-24px w-64px h-64px border-rounded-1/2">
            <img :src="member.avatar ?? `${member.githubLink}.png`">
          </div>
          <div class="flex-1">
            <p>
              {{ member.name }}
              <span class="opacity-70 text-sm">（{{ member.tag }}）</span>
            </p>
            <p class="flex items-center mt-4px opacity-70 text-sm">
              <i class="mr-8px icon-primary i-carbon-location" />
              {{ member.address }}
            </p>
            <p v-if="member.link" class="flex items-center mt-4px opacity-70 text-sm">
              <i class="mr-8px icon-primary i-carbon-link" />
              <a :href="member.link" target="_blank">{{ member.link }}</a>
            </p>
            <p class="flex items-center mt-8px">
              <a class="icon-primary i-carbon-logo-github mr-8px" :href="member.githubLink" target="_blank" />
              <a
                v-if="member.twitterLink" class="icon-primary text-xl i-carbon-logo-twitter" :href="member.twitterLink"
                target="_blank"
              />
            </p>
          </div>
        </div>
      </div>
    </page-module>

    <page-module title="贡献者">
      <div class="flex flex-wrap justify-between">
        <div v-for="i in 50" :key="i" class="flex justify-center items-center mt-6px w-64px h-64px bg-primary border-rounded-1/2 text-sm">
          虚以待位
        </div>
      </div>
    </page-module>
  </page-wrapper>
</template>
