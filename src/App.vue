<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const theme = ref('深色')
const toggle = () => {
  const doc = document.documentElement
  const isDark = doc.dataset.theme === 'dark'
  doc.dataset.theme = isDark ? '' : 'dark'
  theme.value = isDark ? '深色' : '浅色'
  localStorage.setItem('theme', doc.dataset.theme)
}

const menu = ['/homepage', '/document', '/component']
const active = ref(0)
const menuChange = (i: number) => {
  router.push(menu[i])
  active.value = i
}

onMounted(() => {
  document.documentElement.dataset.theme = localStorage.getItem('theme') || ''
  if (localStorage.getItem('theme') === 'dark') {
    theme.value = '浅色'
  }
})
</script>

<template>
  <div class="app">
    <div class="header">
      <div class="title pointer">Aurora-UI</div>
      <div class="menu">
        <div
          class="pointer"
          :class="active === 0 ? 'active' : ''"
          @click="menuChange(0)"
        >
          首页
        </div>
        <div
          class="pointer"
          :class="active === 1 ? 'active' : ''"
          @click="menuChange(1)"
        >
          文档
        </div>
        <div
          class="pointer"
          :class="active === 2 ? 'active' : ''"
          @click="menuChange(2)"
        >
          组件
        </div>
      </div>
      <div class="other">
        <div @click="toggle" class="pointer">{{ theme }}</div>
        <div class="pointer">GitHub</div>
        <div>
          <!-- 版本号 -->
          0.0.1
        </div>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  background-color: var(--color-0);
  color: var(--color-900);
  width: 100vw;
  height: 100vh;
  .header {
    height: 60px;
    border-bottom: 1px solid var(--color-50);
    display: flex;
    align-items: center;
    padding: 0 50px;
    color: var(--color-600);
    .title {
      font-size: 20px;
      font-weight: 800;
      width: 20vw;
      color: var(--color-900);
      font-style: italic;
    }
    .menu {
      display: flex;
      justify-content: center;
      gap: 40px;
      flex: 1;
      .active {
        color: var(--color-900);
      }
    }
    .other {
      width: 20vw;
      justify-content: flex-end;
      display: flex;
      gap: 16px;
      font-weight: 400;
    }
  }
  .container {
    height: calc(100vh - 61px);
  }
}

.pointer {
  cursor: pointer;
}
.pointer:hover {
  color: var(--color-900);
}
</style>
