<script lang="js" setup>
import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomePruduct from './components/HomePruduct.vue'
import{useBannerStore} from '@/stores/banner'
import { onMounted } from 'vue'
import HomePanel from './components/HomePanel.vue'
const bannerStore=useBannerStore()
onMounted(()=>{
  bannerStore.getBanner()
})
</script>
<template>

  <div class="container">

    <HomeCategory />
    <HomeBanner />

  </div>
  <home-new />
  <home-hot />
  <home-Pruduct />
  <HomePanel title="新鲜好物" subtitle="新鲜出炉 品质靠谱">
    <div>
      主体内容
    </div>
  </HomePanel>
  <HomePanel title="人气推荐" subtitle="大家都在买什么">
    <div>
      主体内容
    </div>
  </HomePanel>
</template>
