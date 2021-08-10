<template>
  <div class="p-8 flex flex-row justify-around items-center flex-wrap">
    <div
        v-for="(member, i) in members"
        :key="i"
        class="p-8 text-center flex flex-col justify-center items-center"
      >
        <div>
          <img :src="'/images/members/' + member.img" class="w-32 h-auto"/>
        </div>
        <div class="text-xl text-black">{{member.name}}</div>
        <div class="text-sm text-gray-400 ">{{member.description}}</div>
      </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      members: [
        {
          name: '祈福一枝花',
          img: 'fan.svg?inline',
          description: '多劳多得运营'
        },

        {
          name: 'ac',
          img: 'cc.svg?inline',
          description: '全干数字人'
        },
        
        {
          name: '化龙圆子',
          img: 'mary.svg?inline',
          description: '管家'
        },

        {
          name: 'bobo',
          img: 'bobo.svg?inline',
          description: '短视频干饭人'
        },

        {
          name: '阿加西',
          img: 'jx.svg?inline',
          description: '短视频干饭人'
        }
      ]
    }
  }
}
</script>