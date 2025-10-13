<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { componentMenus } from '@/router/index'
import { useRouter } from 'vue-router'
const router = useRouter()

interface Menu {
  name: string
  children: Array<{
    name: string
    selected: boolean
    path: string
  }>
}

const menus = ref<Menu[]>([])
menus.value = componentMenus.map((item) => {
  return {
    name: item.name,
    children: item.children.map((item) => {
      return {
        name: item.name,
        selected: false,
        path: item.path,
      }
    }),
  }
})

const select = (i: number, j: number) => {
  menus.value[i].children.forEach((item, index) => {
    item.selected = index === j
  })
  router.push(menus.value[i].children[j].path)
}

onMounted(() => {})
</script>

<template>
  <div class="container">
    <div class="menu">
      <div v-for="(menu, i) in menus" :key="i">
        <div class="title">{{ menu.name }}（{{ menu.children.length }}）</div>
        <div
          v-for="(item, j) in menu.children"
          :key="j"
          class="items"
          :class="item.selected ? 'active' : ''"
          @click="select(i, j)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  width: 100vw;
  .menu {
    width: 270px;
    border-right: 1px solid var(--color-50);
    padding: 10px;
    .title {
      font-size: 13px;
      color: var(--color-500);
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
    }
    .items {
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      padding-left: 36px;
      border-radius: 8px;
    }
    .items:hover {
      background-color: var(--color-50);
    }
    .active {
      background-color: var(--color-50);
    }
  }
  .content {
    flex: 1;
    padding: 40px;
  }
}
</style>
