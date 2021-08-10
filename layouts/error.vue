<template>
  <div class="container mt-10 flex flex-col justify-start items-center">
    <h1 class="text-xl" v-if="error.statusCode === 404">Page not found</h1>
    <h1 class="text-xl" v-else>An error occurred</h1>
    <NuxtLink class="mt-10 text-blue-500" to="/">回首页</NuxtLink>

    <div class="p-4 flex flex-col justify-center items-center">
    <img src="/images/exdrive_qr.png" style="w-40 h-40"/>
    <div>
      别急，扫码领取学习资料《分子克隆实验知识汇总》一份
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'plain' // you can set a custom layout for the error page
}
</script>
