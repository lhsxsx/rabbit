<script setup>
import HomePanel from './HomePanel.vue'
import { onMounted, ref } from 'vue'
import { getGoodsAPI } from '@/apis/home'

const goodsProduct = ref([])
const getGoods =async()=>{
  const res=await getGoodsAPI()
  goodsProduct.value=res.result
}
// Example data structure - replace with your actual data
onMounted(()=>
  getGoods()
)
</script>

<template>
  <div class="home-product">
    <HomePanel :title="cate.name" v-for="cate in goodsProduct" :key="cate.id">
      <div class="box">
        <RouterLink class="cover" to="/">
          <img v-img-lazy="cate.picture" :alt="cate.name + '分类封面'" />
          <strong class="label">
            <span>{{ cate.name }}馆</span>
            <span>{{ cate.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="good in cate.goods" :key="good.id">
            <RouterLink to="/" class="goods-item">
              <img v-img-lazy="good.picture" :alt="good.name" />
              <p class="name ellipsis">{{ good.name }}</p>
              <p class="desc ellipsis">{{ good.desc }}</p>
              <p class="price">&yen;{{ good.price }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<style scoped lang="scss">
.home-product {
  background: #fff;
  margin-top: 20px;
  padding: 20px 0;

  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;
      color: #666;
      text-decoration: none;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;
    margin-top: 15px;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;
      display: block;
      overflow: hidden;
      border-radius: 4px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      &:hover img {
        transform: scale(1.05);
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        z-index: 2;

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;
        background: #fafafa;
        border-radius: 4px;
        overflow: hidden;
        transition: all 0.3s ease;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }

    .goods-item {
      display: block;
      width: 100%;
      height: 100%;
      padding: 20px;
      text-align: center;
      transition: all 0.3s ease;
      color: #333;
      text-decoration: none;

      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        background: #fff;
      }

      img {
        width: 160px;
        height: 160px;
        object-fit: contain;
        margin: 0 auto;
      }

      p {
        padding-top: 10px;
        margin: 0;
      }

      .name {
        font-size: 16px;
        font-weight: 500;
      }

      .desc {
        color: #999;
        height: 29px;
        font-size: 14px;
      }

      .price {
        color: $priceColor;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>
