import {  ref} from 'vue'
import { defineStore } from 'pinia'
import { getBannerAPI} from '@/apis/home'
export const useBannerStore = defineStore('banner', () => {
const bannerList=ref([])

const getBanner=async()=>{
  const res=await getBannerAPI()
  console.log(res)
  bannerList.value=res.result
}

// onMounted(()=>{
//   getBanner()
// })
  return {
      bannerList,
      getBanner
   }
})
