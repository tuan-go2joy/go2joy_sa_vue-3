import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { menus } from '@/utils/const';
import i18n from '@/plugins/i18n';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'user',
    redirect: {
      name: 'user',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token');
  if (token && to.name === 'Login') {
    next({ name: 'member-layout' });
  } else if (!token && to.name !== 'Login' && to.name !== 'SignUp') {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
