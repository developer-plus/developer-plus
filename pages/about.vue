<script lang="ts" setup>
interface IMember {
  avatar: string
  name: string
  position: string
  sign: string
  github: string
}

interface IContributor {
  avatar: string
  name: string
  github: string
}

const options = {
  title: '关于我们',
  subtitle: 'About us',
  description: '来源于开发者，服务于开发者。',
  btnLink: 'https://github.com/Hongbusi/developer-plus',
  btnText: '按钮',
  githubLink: 'https://github.com/Hongbusi/developer-plus'
}

const coreMembers = reactive<IMember[]>([
  {
    avatar: 'https://avatars.githubusercontent.com/u/53554371?v=4',
    name: 'Hongbusi',
    position: '发起人',
    sign: '心若不动，风又奈何',
    github: 'https://github.com/Hongbusi'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/49969959?v=4',
    name: 'alexzhang1030',
    position: '核心成员',
    sign: '心若不动，风又奈何',
    github: ''
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/66043405?v=4',
    name: 'TickHeart',
    position: '核心成员',
    sign: '心若不动，风又奈何',
    github: ''
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/20129035?v=4',
    name: 'RainyNight9',
    position: '核心成员',
    sign: '心若不动，风又奈何',
    github: ''
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/22882957?v=4',
    name: 'zgsgs',
    position: '核心成员',
    sign: '心若不动，风又奈何',
    github: ''
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/53544980?v=4',
    name: 'CoderCrush',
    position: '核心成员',
    sign: '心若不动，风又奈何',
    github: ''
  },
  {},
  {},
  {},
  {}
])

const contributor = reactive<IContributor[]>([
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
])

const goGithub = (github: string) => {
  github && window.open(github)
}
</script>

<template>
  <div class="about mt-5">
    <page-wrapper v-bind="options" />

    <div>
      <h3 class="text-2xl">
        为什么叫developer-plus？
      </h3>
    </div>
    <!-- 核心成员 -->
    <div mt-5>
      <h3 class="text-xl">
        核心成员
      </h3>
      <div flex flex-wrap justify-start>
        <div
          v-for="(item, index) in coreMembers"
          :key="item.name + index"
          h-100px
          w-32%
          flex
          mr-1%
          mt-10px
          pt-20px
          pb-20px
          pl-10px
          pr-10px
          bg-primary
          rd-5px
          cursor-pointer
          @click="goGithub(item.github)"
        >
          <img rd-50% bg-gray-600 w-58px h-58px mr-5px :src="item.avatar">
          <div flex-1>
            <div flex justify-between>
              <div text-14px w-60% truncate>
                {{ item.name }}
              </div>
              <div text-12px>
                {{ item.position }}
              </div>
            </div>
            <div text-14px mt-10px>
              {{ item.sign }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 贡献者 -->
    <div mt-5>
      <h3 class="text-xl">
        贡献者
      </h3>
      <div class="flex justify-between flex-wrap mt-16px">
        <img
          v-for="(item, index) in contributor"
          :key="item.name + index"
          mt-8px
          rd-50%
          w-58px
          h-58px
          cursor-pointer
          border-rounded-28px
          bg-black
          :src="item.avatar"
        >
      </div>
    </div>
  </div>
</template>
