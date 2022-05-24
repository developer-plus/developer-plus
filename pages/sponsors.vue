<script setup lang="ts">
const options = {
  title: 'Sponsors',
  description: '您的每一份支持，都是激励 developer-plus 创造出更多有趣、有价值的事物的动力。'
}
</script>

<template>
  <page-wrapper v-bind="options">
    <div class="flex justify-around mt-150px">
      <div class="flex flex-col items-center w-40%">
        <i class="icon-primary i-ri-alipay-fill text-3xl" />
        <div class="mt-8px border border-gray-200 dark:border-gray-200/20">
          <img class="w-full h-full" src="https://hongbusi.oss-cn-hangzhou.aliyuncs.com/alipay-qrcode.jpeg" alt="">
        </div>
      </div>
      <div class="flex flex-col items-center w-40%">
        <i class="icon-primary i-carbon-logo-wechat text-3xl" />
        <div class="mt-8px border border-gray-200 dark:border-gray-200/20">
          <img class="w-full h-full" src="https://hongbusi.oss-cn-hangzhou.aliyuncs.com/wechat-qrcode.jpeg" alt="">
        </div>
      </div>
    </div>
  </page-wrapper>
</template>
