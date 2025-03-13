// 引入全局样式
import '@/styles/index.scss';

import { createApp } from 'vue';

import globalComponent from '@/components';
import i18n from '@/locales';
import router from '@/router';
import pinia from '@/store';

import App from './App.vue';

const app = createApp(App);

app.use(i18n);
app.use(pinia);
app.use(router);
app.use(globalComponent);

app.mount('#app');
