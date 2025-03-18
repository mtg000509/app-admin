import type { UserLoginType, UserInfoType } from '@/types';

import request, { type ApiResponse } from './request';

enum API {
  USER_LOGIN = '/user/login',
  GET_USER_INFO = '/user/info',
}

// 用户登录
const userLoginApi = (data: any) => {
  return request.post<ApiResponse<UserLoginType>>(API.USER_LOGIN, data);
};

// 获取用户信息
const getUserInfoApi = () => {
  return request.get<ApiResponse<UserInfoType>>(API.GET_USER_INFO);
};

export { userLoginApi, getUserInfoApi };
