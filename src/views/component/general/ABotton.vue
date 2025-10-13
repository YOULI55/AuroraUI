<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {})
</script>

<template>
  <div class="box">
    <div class="title">
      按钮 Button
      <div class="desc">
        点击按钮用来触发一些操作，响应用户点击行为，触发相应的业务逻辑
      </div>
    </div>
    <div>
      <div class="title">代码演示</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  .title {
    font-size: 30px;
    .desc {
      font-size: 14px;
      margin: 30px 0;
    }
  }
}
</style>
