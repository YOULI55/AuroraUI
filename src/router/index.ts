import { createRouter, createWebHistory } from 'vue-router'

const general = [
  {
    name: '按钮 Button',
    path: '/component/button',
    component: () => import('@/views/component/general/ABotton.vue')
  }
]

export const componentMenus = [
  {
    name: '通用组件 General',
    children: general
  }
]

export const routes = [
  {
    name: 'component',
    path: '/component',
    // redirect: '/component/button',
    component: () => import('@/views/component/Component.vue'),
    children: [...general],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
