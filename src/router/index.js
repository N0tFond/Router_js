import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/loader',
      name: 'loader',
      component: () => import('../views/LoaderView.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('../views/FormView.vue')
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: () => import('../views/NotFoundView.vue')
    },
  ]
})

export default router
