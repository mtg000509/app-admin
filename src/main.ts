// 引入全局样式
import '@/styles/index.scss';

// 引入 vite-plugin-svg-icons 注册脚本
import 'virtual:svg-icons-register';

// 引入全局组件
import globalComponent from '@/components';
import i18n from '@/locales';
import router from '@/router';
import pinia from '@/store';

import App from './App.vue';

import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

// 安装 i18n
app.use(i18n);
// 安装 pinia
app.use(pinia);
// 安装 router
app.use(router);

// 安装 Element Plus
app.use(ElementPlus);
// 注册全局组件
app.use(globalComponent);

app.mount('#app');
