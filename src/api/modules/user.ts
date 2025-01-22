import http from '@/api/http';
import type { userLoginRequestType, userLoginResponseType } from '@/api/types/user';

enum API {
  USER_LOGIN = '/user/login',
}

// 用户登录
export const userLoginRequest = (data: userLoginRequestType) =>
  http.post<any, userLoginResponseType>(API.USER_LOGIN, data);
