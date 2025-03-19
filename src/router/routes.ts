/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import MaterialSymbolsHome from '~icons/material-symbols/home';
import MaterialSymbolsInfo from '~icons/material-symbols/info';
import MaterialSymbolsPerson from '~icons/material-symbols/person';
import MaterialSymbolsSettings from '~icons/material-symbols/settings';

import type { RouteRecordRaw } from 'vue-router';

const basicRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    meta: {
      hidden: false,
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'route.home',
          icon: MaterialSymbolsHome,
          hidden: false,
        },
      },
    ],
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: 'route.setting.title',
      icon: MaterialSymbolsSettings,
      hidden: false,
    },
    redirect: '/setting/about',
    children: [
      {
        path: '/setting/about',
        name: 'About',
        component: () => import('@/views/setting/about/index.vue'),
        meta: {
          title: 'route.setting.about',
          icon: MaterialSymbolsInfo,
          hidden: false,
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: () => import('@/views/error/index.vue'),
    meta: {
      hidden: true,
    },
  },
];

const accountRoutes: RouteRecordRaw[] = [
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/views/account/index.vue'),
    meta: {
      title: 'route.setting.account',
      icon: MaterialSymbolsPerson,
      hidden: false,
    },
  },
];

export { basicRoutes, accountRoutes };
