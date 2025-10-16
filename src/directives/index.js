import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    app.directive('img-lazy',{
    mounted(el,binding){
    console.log(el,binding.value)
    const {stop}=useIntersectionObserver(
    el,
    ([{ isIntersecting }]) => {
    // 当元素进入视口时
    console.log('元素进入视口', isIntersecting)
    if (isIntersecting) {
      // 停止监听
      el.src = binding.value
      stop()
    }
  },
)
  }
})
}
}
