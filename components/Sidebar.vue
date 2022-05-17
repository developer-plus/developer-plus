<template>
  <div class="px-32px py-24px w-380px min-h-screen border-l border-gray-200">
    <div class="flex justify-between">
      <h2 class="text-2xl">
        developer-plus
      </h2>
      <div class="flex items-center text-lg">
        <a class="icon-btn i-carbon-logo-github mr-8px" href="https://github.com/developer-plus" target="_blank" />
        <dark-toggle />
      </div>
    </div>

    <div class="mt-16px opacity-70">
      来源于开发者，服务于开发者。
    </div>

    <div class="mt-36px">
      <h3 class="text-xl">
        核心成员
      </h3>

      <div class="flex justify-between flex-wrap mt-16px">
        <div v-for="item in 10" :key="item" class="mt-8px w-56px h-56px cursor-pointer border-rounded-28px bg-black" />
      </div>
    </div>

    <div class="mt-36px">
      <h3 class="text-xl">
        快速入口
      </h3>

      <div class="flex justify-between flex-wrap mt-16px">
        <button class="btn mt-8px">
          周刊投稿
        </button>
        <button class="btn mt-8px">
          新建书签
        </button>
        <button class="btn mt-8px">
          新增计划
        </button>
        <button class="btn mt-8px">
          加入我们
        </button>
      </div>
    </div>

    <div class="mt-36px">
      <h3 class="text-xl">
        友情链接
      </h3>

      <div class="mt-16px">
        <a v-for="item in 15" :key="item" href="https://github.com/cuixiaorui/mini-vue" target="_blank">
          <div class="px-8px py-8px mt-8px bg-gray-200 rounded opacity-70">
            <h2 class="font-500">mini-vue</h2>
            <p class="opacity-70">developer-plus 梦开始的地方。</p>
          </div>
        </a>
      </div>
    </div>

    <footer class="mt-42px text-sm opacity-70">
      Copyright © 2022 developer-plus, made with 💗.
    </footer>
  </div>
</template>
