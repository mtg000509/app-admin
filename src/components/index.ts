// 导入全局组件
import SvgIcon from '@/components/SvgIcon/index.vue';

import type { App, Component } from 'vue';

// 定义全局组件的集合
const globalComponent: Record<string, Component> = {
  SvgIcon,
};

export default {
  install(app: App) {
    // 遍历并全局注册组件
    Object.entries(globalComponent).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};
