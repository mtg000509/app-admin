import router from '@/router';
import pinia from '@/store';

import App from './App.vue';

import { createApp } from 'vue';

// 引入全局样式
import '@/styles/index.scss';

const app = createApp(App);

// 安装 pinia
app.use(pinia);
// 安装 router
app.use(router);

app.mount('#app');
