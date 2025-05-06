import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Project from '@/views/Project.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects/:id',
      name: 'projects',
      component: Project,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      redirect: (to) => {
        return { name: 'home' };
      },
    },
  ],
});

export default router;
