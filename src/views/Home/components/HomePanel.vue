<script setup>
// Component logic can be added here
defineProps({
  // Define props if needed
  title: {
    type: String,
    default: '新鲜好物'
  },
  subtitle: {
    type: String,
    default: '新鲜出炉 品质靠谱'
  }
});
</script>

<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small>{{ subtitle }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-panel {
  background-color: #fff;
  margin: 20px 0;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  .container {
    padding: 0 20px;
    max-width: 1240px;
    margin: 0 auto;
  }

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid #f5f5f5;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;
      color: #333;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }

  .content {
    padding: 40px 0;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 18px;
  }
}
</style>
