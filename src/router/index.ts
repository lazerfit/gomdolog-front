import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PostSave from '@/components/PostSave.vue';

const PostView = () => import('../views/PostView.vue');
const CategoryView = () => import('../views/CategoryView.vue');
const PostSaveView = () => import('../views/PostSaveView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostView
    },
    {
      path: '/category/:title',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/post/new',
      name: 'postSave',
      component: PostSaveView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0 });
        }, 350);
      });
    }
  }
});

export default router;
