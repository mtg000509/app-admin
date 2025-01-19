// 引入全局组件
import globalComponent from '@/components';
import router from '@/router';
import pinia from '@/store';

import App from './App.vue';

import { createApp } from 'vue';

// 引入 vite-plugin-svg-icons 注册脚本
import 'virtual:svg-icons-register';

import ElementPlus from 'element-plus';
// 引入 Element Plus 样式
import 'element-plus/dist/index.css';

// 引入全局样式
import '@/styles/index.scss';

const app = createApp(App);

// 安装 Element Plus
app.use(ElementPlus);

// 注册全局组件
app.use(globalComponent);

// 安装 pinia
app.use(pinia);
// 安装 router
app.use(router);

app.mount('#app');
