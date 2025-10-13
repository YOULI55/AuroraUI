<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {})
</script>

<template>
  <div class="box">
    <div class="title">这是一个标题</div>
    <div class="desc">这是一个描述</div>
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
