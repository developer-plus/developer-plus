<script setup lang="ts">
import type { ITeamMember } from '~/types/team-member'

const options = {
  title: '关于我们',
  subtitle: 'About us',
  btnText: '加入我们',
  btnLink: 'https://github.com/developer-plus/developer-plus/issues/23'
}

const members = await $fetch<ITeamMember[]>('/api/team-members')
</script>

<template>
  <page-wrapper v-bind="options">
    <page-module title="为什么叫 developer-plus？">
      <div class="opacity-70">
        开发者之上：来源于开发者，服务于开发者。
        <a class="ml-12px btn-primary-small" href="https://github.com/developer-plus/guide/wiki/%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%AB-developer-plus%EF%BC%9F" target="_blank">
          详细介绍
        </a>
      </div>
    </page-module>

    <page-module title="团队成员">
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
  </page-wrapper>
</template>
