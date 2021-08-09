<template>
  <div class="shadow-inner">
    <div class=" flex justify-center items-center">
      <h1 class="mt-20 text-5xl text-blue-500">为什么选择老司机</h1>
    </div>
    <div class="p-8 flex flex-col sm:flex-row">
      <div class="flex flex-col flex-1">
        <div class="flex justify-center items-center ">
          <ladiesImg class="" />
        </div>
        <div class="p-4 px-10 break-words text-lg flex flex-col justify-around items-center flex-1">
          <p>清晰、直接、高效的视频能帮助实验人员快速掌握实验技能，能帮助推广人员更容易传递价值。</p>
        </div>
      </div>

      <div class="flex flex-col flex-1">
        <div class="flex justify-center items-center ">
          <bossImg class="" />
        </div>
        <div class="p-4 px-10 break-words text-lg flex flex-col justify-around items-center flex-1">
          <p>我们利用专业知识，结合一点跨界的技能，和灵光一闪的创意，创作了一批又一批短视频。</p>
        </div>
      </div>

      <div class="flex flex-col flex-1">
        <div class="flex justify-center items-center ">
          <kbImg class="" />
        </div>
        <div class="p-4 px-10 break-words text-lg flex flex-col justify-around items-center flex-1">
          <p>如果你看到刚入门学习实验的WesWallace在b站留言：三连，谢谢，让我这种小白受益匪浅！</p>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import bossImg from '~/assets/images/boss.svg?inline'
import kbImg from '~/assets/images/be.svg?inline'
import ladiesImg from '~/assets/images/ladies.svg?inline'

export default {
  components: {
    bossImg,
    kbImg,
    ladiesImg
  }
}
</script>
