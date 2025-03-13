import type { Router } from 'vue-router';

/**
 * 注册全局路由守卫
 * @param router - 路由实例
 */
export default function setupRouterGuards(router: Router) {
  // 全局前置守卫
  router.beforeEach((_to, _form, next) => {
    next();
  });

  // 全局后置守卫
  router.afterEach(() => {});
}
