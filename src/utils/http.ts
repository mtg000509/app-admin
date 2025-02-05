import i18n from '@/locales';

import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import axios from 'axios';
import { ElMessage } from 'element-plus';

// 创建 Axios 实例
const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers = config.headers || {};
    return config;
  },
  (error) => Promise.reject(error),
);

// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, message } = response.data;

    // 如果 message 是对象，则根据当前语言获取对应语言的值
    if (message && typeof message === 'object') {
      response.data.message = message[i18n.global.locale.value];
    }

    if (code !== 200) {
      return Promise.reject(new Error(response.data.message));
    }

    return response.data;
  },
  (error) => {
    ElMessage.error({
      message: error?.response?.statusText,
      type: 'error',
    });
    return Promise.reject(error);
  },
);

export default http;
