import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const PostView = () => import('../views/PostView.vue');
const CategoryView = () => import('../views/CategoryView.vue');
const PostSaveView = () => import('../views/PostSaveView.vue');
const AdminView = () => import('../views/AdminView.vue');
const NotFound = () => import('../views/404View.vue');
const SignupView = () => import('@/views/SignupView.vue');

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
      path: '/post/:id/update',
      name: 'post-update',
      component: PostSaveView
    },
    {
      path: '/category/:title',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/search/:q',
      name: 'post-search',
      component: CategoryView
    },
    {
      path: '/post/new',
      name: 'post-save',
      component: PostSaveView
    },
    {
      path: '/admin',
      name: 'admin-dashboard',
      component: AdminView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
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
