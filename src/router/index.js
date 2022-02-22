import { createRouter, createWebHistory } from 'vue-router'
//createWebHistory 是HTML5模式
const routes = [{
  path: '/',
  name: 'Index',
  component: () => import('../views/Index.vue')
}, {
  path: '/category',
  name: 'category',
  component: () => import('../views/Category.vue')
}, {
  path: '/category',
  name: 'category',
  component: () => import('../views/Category.vue')
}, {
  path: '/good',
  name: 'good',
  component: () => import('../views/Good.vue')
}, {
  path: '/guest',
  name: 'guest',
  component: () => import('../views/Guest.vue')
},]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router