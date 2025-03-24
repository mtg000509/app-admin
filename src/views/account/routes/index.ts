/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import LetsIconsChieldCheck from '~icons/lets-icons/chield-check';
import LetsIconsUser from '~icons/lets-icons/user';

import SafeMange from '../pages/safe-manage/index.vue';
import UserInfo from '../pages/user-info/index.vue';

import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/user-info',
    name: 'UserInfo',
    component: UserInfo,
    meta: {
      title: '个人信息',
      icon: LetsIconsUser,
      hidden: false,
    },
  },
  {
    path: '/safe-manage',
    name: 'SafeManage',
    component: SafeMange,
    meta: {
      title: '账户安全',
      icon: LetsIconsChieldCheck,
      hidden: false,
    },
  },
];
