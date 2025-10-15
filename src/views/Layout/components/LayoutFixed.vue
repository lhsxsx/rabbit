<!-- LayoutHeaderSticky.vue -->
<script setup>
import { useScroll } from '@vueuse/core'
import { useCategoryStore } from '@/stores/category';
const { y } = useScroll(window) // 监听窗口滚动位置
const categoryStore = useCategoryStore();
// 页面滚动时获取分类数据（可选，根据实际需求决定是否需要）
</script>

<template>
  <!-- 动态绑定 .show 类：isShow 为 true 时显示导航栏 -->
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container">
      <!-- Logo 路由链接：跳转到首页 -->
      <RouterLink class="logo" to="/" />

      <!-- 主导航菜单 -->
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
          <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        </li>
      </ul>

      <!-- 右侧辅助链接 -->
      <div class="right">
        <RouterLink to="/brand">品牌</RouterLink>
        <RouterLink to="/topic">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// 引入全局 SCSS 变量（若项目有全局变量文件，需补充路径，避免 $xtxColor 报错）
// @import "@/styles/variables.scss"; // 示例路径，根据项目实际结构调整

.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;

  // 初始隐藏状态：向上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 显示状态：取消平移 + 完全不透明 + 过渡动画
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    width: 1200px; // 补充容器宽度，避免内容拉伸（可根据项目设计调整）
    margin: 0 auto; // 水平居中
    display: flex;
    align-items: center;
    justify-content: space-between; // 让 Logo、导航、右侧链接均匀分布
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
    // 若 Logo 图片加载失败，可添加文字 fallback
    &::after {
      content: "";
      display: inline-block;
      width: 160px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      color: #333;
      font-size: 20px;
    }
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor; // 依赖全局变量 $xtxColor

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      color: #333; // 补充默认颜色

      &:hover {
        color: $xtxColor;
      }

      // 路由激活状态样式（配合 Vue Router）
      &.router-link-active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }
}

.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
      color: #333; // 补充默认颜色

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }

      // 路由激活状态样式
      &.router-link-active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }
}
</style>
