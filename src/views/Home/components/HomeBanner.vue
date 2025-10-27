<script setup>
// Script setup logic goes here
// import { onMounted, ref} from 'vue'
// import { getBannerAPI} from '@/apis/home'

// const bannerList=ref([])

// const getBanner=async()=>{
//   const res=await getBannerAPI()
//   console.log(res)
//   bannerList.value=res.result
// }

// onMounted(()=>{
//   getBanner()
// })
import { useBannerStore } from '@/stores/bannersStore';
const bannerStore = useBannerStore();

</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerStore.bannerList" :key="item.id">
        <img
          :src="item.imgUrl"
          alt="Banner image"
        >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  // Element Plus carousel custom styles can be added here if needed
  :deep(.el-carousel) {
    width: 100%;
    height: 100%;
  }

  :deep(.el-carousel__container) {
    height: 100%;
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover; // Ensures images cover the area properly
  }
}
</style>
