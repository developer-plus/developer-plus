<template>
  <div class="px-32px py-24px w-380px min-h-screen border-l border-gray-200">
    <div class="flex justify-between">
      <h2 class="text-2xl">
        developer-plus
      </h2>
      <div class="flex items-center">
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
        <div v-for="item in 10" :key="item" class="mt-8px w-56px h-56px cursor-pointer border-rounded-28px bg-black">
          Hongbusi
        </div>
      </div>
    </div>

    <div class="mt-36px">
      <h3 class="text-xl">
        快速入口
      </h3>

      <div class="flex justify-between flex-wrap mt-16px">
        <div v-for="item in 10" :key="item" class="btn">
          Hongbusi
        </div>
      </div>
    </div>

    <div class="mt-36px">
      <h3 class="text-xl">
        友情链接
      </h3>

      <div>
        <div v-for="item in 10" :key="item">
          Hongbusi
        </div>
      </div>
    </div>

    <footer>
      Copyright © 2022 developer-plus, made with 💗.
    </footer>
  </div>
</template>
