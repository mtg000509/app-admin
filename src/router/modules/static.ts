import type { RouteRecordRaw } from 'vue-router';

const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    meta: {},
  },
];

export default staticRoutes;
