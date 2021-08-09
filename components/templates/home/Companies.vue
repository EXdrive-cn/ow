<template>
  <div class="flex flex-col shadow-inner">
    <div class=" flex justify-center items-center">
      <h1 class="mt-20 text-4xl text-blue-500">合作关系</h1>
    </div>
    <div class="p-8 flex flex-row justify-around items-center flex-wrap">
      <div
        v-for="(company, i) in companies"
        :key="i"
        class="p-8 text-center"
      >
        <div>
          <img :src="company.img" class="w-20 h-auto"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companies: [
        {
          name: '科学仪器协会',
          img: 'images/companies/gzsyqhyxh.jpeg',
          url: '',
          class: 'h-10'
        },
        {
          name: '安邦生物',
          img: 'images/companies/anbang.jpeg',
          url: '',
          class: 'h-10'
        },
        {
          name: 'Laboto',
          img: 'images/companies/laboto.png',
          url: '',
          class: 'h-10'
        },
        {
          name: '锐竞平台',
          img: 'images/companies/rj.png',
          url: 'https://rj.cn',
          class: 'h-10'
        },
        {
          name: '牛顿光学',
          img: 'images/companies/ndgx.jpeg',
          url: '',
          class: 'h-10'
        },
        {
          name: '4E',
          img: 'images/companies/4e.jpeg',
          url: '',
          class: 'h-10'
        },
        {
          name: '仪器大学堂',
          img: 'images/companies/hnkxyqlmdxt.jpg',
          url: '',
          class: 'h-10'
        }
      ]
    }
  },
}
</script>