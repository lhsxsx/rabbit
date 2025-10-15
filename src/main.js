// import './assets/main.css'
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useIntersectionObserver } from '@vueuse/core'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
app.directive('img-lazy',{
  mounted(el,binding){
  console.log(el,binding.value)
  useIntersectionObserver(
  el,
  ([{ isIntersecting }]) => {
    // 当元素进入视口时
    console.log('元素进入视口', isIntersecting)
    if (isIntersecting) {
      // 停止监听
      el.src = binding.value
      
    }
  },
)
  }
})
