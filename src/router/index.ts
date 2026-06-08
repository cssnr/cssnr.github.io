import { createRouter, createWebHistory, type RouterScrollBehavior } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

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
    path: '/404',
    name: '404',
    component: NotFoundView,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView,
  },
]

export const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (to.hash) return { el: to.hash, behavior: 'smooth' }
  if (savedPosition) return savedPosition
  return { top: 0, behavior: 'smooth' }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior,
  routes,
})

export default router
