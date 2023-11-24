import { createRouter, createWebHistory } from 'vue-router'
import AboutCard from '../components/AboutCard.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/about',
      name: 'about',
      component: AboutCard
    }
  ]
})

export default router
