<script setup>
import { defineProps } from 'vue'
defineProps({
  good: {
    type: Object,
    required: true
}
}
)
</script>
<template>
   <RouterLink to="/" class="goods-item">
              <img v-img-lazy="good.picture" :alt="good.name" />
              <p class="name ellipsis">{{ good.name }}</p>
              <p class="desc ellipsis">{{ good.desc }}</p>
              <p class="price">&yen;{{ good.price }}</p>
            </RouterLink>
</template>
<style scoped lang="scss">
.goods-item {
      display: block;
      width: 200px;
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
</style>
