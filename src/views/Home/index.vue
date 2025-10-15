<script lang="js" setup>
import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomePruduct from './components/HomePruduct.vue'
</script>
<template>

  <div class="container">

    <HomeCategory />
    <HomeBanner />

  </div>
  <home-new />
  <home-hot />
  <home-Pruduct />
</template>
