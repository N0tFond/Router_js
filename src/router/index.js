import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoaderView from '@/views/LoaderView.vue'
import FormView from '@/views/FormView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      //? On à pas besoin de la ligne 'component: () => import('../views/AboutView.vue')' on peut tout simplement la remplacer par le "component" suivi du nom du component à mettre en place
      // component: () => import('../views/AboutView.vue')
      component: AboutView
    },
    {
      path: '/loader',
      name: 'loader',
      // component: () => import('../views/LoaderView.vue')
      component: LoaderView
    },
    {
      path: '/forms',
      name: 'forms',
      // component: () => import('../views/FormView.vue')
      component: FormView
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: NotFoundView
    }
  ]
})

export default router
