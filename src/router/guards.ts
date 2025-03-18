import nprogress from 'nprogress';

import { useUserStore } from '@/store';

import type { Router } from 'vue-router';

// 引入进度条样式
import 'nprogress/nprogress.css';

nprogress.configure({ showSpinner: false });

/**
 * 注册全局路由守卫
 * @param router - 路由实例
 */
export default function setupRouterGuards(router: Router) {
  // 全局前置守卫
  router.beforeEach(async (to, _form, next) => {
    // 开启进度条
    nprogress.start();

    const { token, userInfo, getUserInfo, userLogout } = useUserStore();

    if (token) {
      if (to.path === '/login') {
        next({ path: '/' });
      } else {
        if (userInfo) {
          next();
        } else {
          try {
            await getUserInfo();
            next({ ...to });
          } catch {
            userLogout();
            next({ path: '/login', query: { redirect: to.path } });
          }
        }
      }
    } else {
      if (to.path === '/login') {
        next();
      } else {
        next({ path: '/login', query: { redirect: to.path } });
      }
    }
  });

  // 全局后置守卫
  router.afterEach(() => {
    // 关闭进度条
    nprogress.done();
  });
}
