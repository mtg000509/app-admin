import http from '@/utils/http';

import type { getUserInfoResponseType, userLoginRequestType, userLoginResponseType } from './type';

// 接口地址
enum API {
  USER_LOGIN = '/user/login',
  GET_USER_INFO = '/user/info',
}

// 用户登录
export const userLoginRequest = (data: userLoginRequestType) => {
  return http.post<any, userLoginResponseType>(API.USER_LOGIN, data);
};

// 获取用户信息
export const getUserInfoRequest = () => {
  return http.get<any, getUserInfoResponseType>(API.GET_USER_INFO);
};
