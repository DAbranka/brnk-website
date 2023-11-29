import { createRouter, createWebHistory } from 'vue-router'
import AboutCard from '../components/AboutCard.vue'
import AboutTextEng from '../components/AboutTextEng.vue'
import AboutTextFr from '../components/AboutTextFr.vue'
import HomePage from '../views/HomePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      views: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutCard,
      children: [
        {
          path: 'eng',
          name: 'about-eng',
          component: AboutTextEng
        },
        {
          path: 'fr',
          name: 'about-fr',
          component: AboutTextFr
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
