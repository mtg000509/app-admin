import i18n from '@/locales';
import { useUserStore } from '@/store/modules/user';

import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import axios from 'axios';
import { ElMessage } from 'element-plus';
import { z } from 'zod';

// 响应数据格式
export const baseSchema = z.object({
  code: z.number(),
  message: z.string(),
  data: z.any(),
});

// axios 实例
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

    // user store
    const userStore = useUserStore();

    if (userStore.userToken) {
      config.headers.token = userStore.userToken;
    }
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
