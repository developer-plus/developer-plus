<script setup lang="ts">
const options = {
  title: '关于我们',
  subtitle: 'About us'
}

const members = await $fetch('/api/team-members')
</script>

<template>
  <page-wrapper v-bind="options">
    <page-module title="为什么叫 developer-plus？">
      <div class="opacity-70 indent-2em">
        在决定去创建组织之后，和几个群友讨论了一下关于组织名称的问题，得到了很多答案：hbs-admin、hbs-design、hbs-team...，但是好像和我的想法并不吻合。

        想要创建这个组织，或者说想要去做 vue-hbs-admin 这个开源项目最根本的原因，是因为想要找一群小伙伴共同学习，共同进步，可以互相 review 代码，享受开源的快乐。我想要的是一个团队，而不是带着 hbs 这种个人色彩的名称。

        纠结了很久，也想到了很多满意的名字，如：developers...（糟糕，其他的想不起了...）。但是这些名字都被抢注了，很失望。

        不知道怎么滴，突然爆出了 plus 这个单词，可能是受 element-plus 的影响，也有可能是因为我已经想好了 logo 的设计。于是乎，名字敲定，第一个组织成功创建，开心地把 vue-hbs-admin 迁移到组织。
      </div>
    </page-module>

    <page-module title="团队成员">
      <div class="flex flex-wrap justify-between">
        <div v-for="(member, index) in members" :key="index" class="flex justify-between px-30px py-12px mt-16px w-340px bg-primary">
          <div class="overflow-hidden mr-24px w-64px h-64px border-rounded-1/2">
            <img :src="member.avatar">
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
              <a v-if="member.twitterLink" class="icon-primary text-xl i-carbon-logo-twitter" :href="member.twitterLink" target="_blank" />
            </p>
          </div>
        </div>
      </div>
    </page-module>
  </page-wrapper>
</template>
