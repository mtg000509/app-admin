import { setupRouterGuards } from './guards';
import { staticRoutes } from './routes/static';

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  /*
   * 使用 HTML5 History 模式，支持浏览器的前进、后退操作
   * BASE_URL 从 Vite 配置的环境变量中读取，通常是应用的根路径
   */
  history: createWebHistory(import.meta.env.BASE_URL),

  // 路由配置
  routes: staticRoutes,

  // 滚动行为
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      // 如果存在保存的位置（如浏览器前进/后退时），恢复到保存的位置
      return savedPosition;
    }
    if (to.hash) {
      // 如果目标路由包含锚点，滚动到锚点位置
      return { el: to.hash, behavior: 'smooth' };
    }
    // 默认滚动到顶部
    return { top: 0 };
  },
});

// 注册全局路由守卫
setupRouterGuards(router);

export default router;
