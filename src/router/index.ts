import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { name: 'Home' },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { name: 'About' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: () => {
      return '/'
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
  routes,
})

export default router
