import ECharts from './echarts/index.vue';

import type { App, Component } from 'vue';

// 定义全局组件集合
const globalComponent: Record<string, Component> = {
  ECharts,
};

export default {
  install(app: App) {
    // 遍历并全局注册组件
    Object.entries(globalComponent).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};
