import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

import i18n from '@/locales';

// 接口返回数据结构
interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

// axios 实例
const request: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => Promise.reject(error),
);

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    if (response.data.code !== 200) {
      return Promise.reject(new Error(response.data.message));
    }

    const { message } = response.data.data;

    // 根据当前语言获取响应消息
    if (message && typeof message === 'object') {
      response.data.data.message = message[i18n.global.locale.value];
    }

    return response.data.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default request;
