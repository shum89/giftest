import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/History.vue'),
  },
  {
    path: '/history/:id',
    name: 'HistoryPaginated',
    component: () => import('../views/History.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
