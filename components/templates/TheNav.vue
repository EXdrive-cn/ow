<template>
  <header class="sticky top-0 left-0 right-0 z-30 bg-white">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-4">
        <EXdriveLogo class="h-8" />
        <div class="ml-4 text-black whitespace-nowrap">实验老司机</div>
      </div>
      <!-- <div class="block lg:hidden ">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div> -->
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow flex justify-start">
          <NuxtLink class="block mt-4 lg:inline-block lg:mt-0 text-black-900 hover:text-gray-400 mr-4 text-xl" to="/">首页</NuxtLink>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-black-900 hover:text-blue-900 mr-4 text-xl" href="https://appkth0y5jh8510.pc.xiaoe-tech.com/page/2794589?navIndex=1">学习中心</a>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-black-900 hover:text-blue-800 mr-4 text-xl" href="https://www.zhihu.com/people/exdrive">知乎</a>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-black-900 hover:text-pink-400 mr-4 text-xl" href="https://space.bilibili.com/195696636">B站</a>
          <NuxtLink class="block mt-4 lg:inline-block lg:mt-0 text-black-900 hover:text-gray-400 mr-4 text-xl" to="/team">团队</NuxtLink>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-green-600 hover:text-green-400 mr-4 text-xl" href="https://work.weixin.qq.com/kfid/kfc9356685d9b1f2b01">微信客服</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import EXdriveLogo from '~/assets/images/logo.svg?inline'

export default {
  components: {
    EXdriveLogo
  }
}
</script>

<style>

</style>