import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getCategoryAPI } from '@/apis/category'
export  function useCategory() {

const categoryData = ref({

})
const route = useRoute()
const getCategory=async ( id=route.params.id) => {
  const res = await getCategoryAPI(id)
  categoryData.value = res.result
}
onMounted(()=>{
  getCategory()
})
onBeforeRouteUpdate((to)=>{
  console.log('路由更新了')
  getCategory(to.params.id)
})
return {
  categoryData
   }
}
