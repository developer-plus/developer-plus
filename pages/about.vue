<script lang="ts" setup>
interface IMember {
  avatar: string
  name: string
  position: string
  sign: string
}

const coreMembers = reactive<IMember[]>([
  {
    avatar: 'https://avatars.githubusercontent.com/u/53554371?v=4',
    name: 'Hongbusi',
    position: '发起人',
    sign: '心若不动，风又奈何'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/49969959?v=4',
    name: 'alexzhang1030',
    position: '核心成员',
    sign: '心若不动，风又奈何'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/66043405?v=4',
    name: 'TickHeart',
    position: '核心成员',
    sign: '心若不动，风又奈何'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/20129035?v=4',
    name: 'RainyNight9',
    position: '核心成员',
    sign: '心若不动，风又奈何'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/22882957?v=4',
    name: 'zgsgs',
    position: '核心成员',
    sign: '心若不动，风又奈何'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/53544980?v=4',
    name: 'CoderCrush',
    position: '核心成员',
    sign: '心若不动，风又奈何'
  },
  {}, {}, {}, {}])
</script>

<template>
  <div class="about mt-5">
    <div class="h-40px">
      关于我们 <span>About us</span>
    </div>
    <div>源于开发者，服务于开发者。</div>
    <div>
      <div>为什么叫developer-plus？</div>
    </div>
    <div>
      <div>核心成员</div>
      <div flex flex-wrap justify-start>
        <div v-for="(item, index) in coreMembers" :key="item.name + index" h-100px w-32% flex mr-1% mt-5 p-10px bg-gray-300 rd-5px>
          <img rd-50% bg-gray-600 w-58px h-58px :src="item.avatar">
          <div>
            <div text-14px>
              {{ item.name }} <span text-12px>{{ item.position }}</span>
            </div>
            <div>{{ item.sign }}</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>贡献者</div>
    </div>
  </div>
</template>
