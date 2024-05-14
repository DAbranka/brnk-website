import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            views: HomePage
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
});

export default router;
