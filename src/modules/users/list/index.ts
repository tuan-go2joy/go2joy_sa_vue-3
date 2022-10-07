import router from '@/router';
router.addRoute({
  name: 'user',
  path: '/',
  component: () => import('./View.vue'),
});
