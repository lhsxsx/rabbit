<script setup>
// Define your component props or data here
// const newList = ref([]) // Example data
import HomePanel from '@/views/Home/components/HomePanel.vue'
import { getHotAPI } from '@/apis/home'
import { onMounted,ref } from 'vue'
const hotList = ref([])
const getHotList = async () => {
  const res = await getHotAPI()
  console.log(res)
  hotList.value = res.result}
  onMounted(() => {
    getHotList()
  })
</script>

<template>
  <HomePanel title="人气推荐" subtitle="新鲜出炉 品质靠谱">
    <ul class="goods-list">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
          <img v-img-lazy="item.picture" :alt="item.name" />
          <p class="name">{{ item.title }}</p>
          <p class="price">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>

  </HomePanel>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  height: 406px;
  width: 80%; /* 添加宽度限制 */
  margin: 0 auto;

  li {
    width: 230px;
    height: 100%;
    background: #f0f9f4;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      color: inherit;
      text-decoration: none;
    }

    img {
      width: 100%;
      height: 280px;
      object-fit: cover;
      display: block;
    }

    p {
      font-size: 20px;
      padding: 12px 20px 0;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin: 0;
    }

    .name {
      color: #333;
      font-weight: 500;
    }

    .price {
      color: $priceColor;
      font-weight: bold;
    }
  }
}
</style>
