import { baseSchema } from '@/utils/http';

import { z } from 'zod';

// 用户登录请求
export const userLoginRequestSchema = z.object({
  username: z.string(),
  password: z.string(),
});
export type userLoginRequestType = z.infer<typeof userLoginRequestSchema>;

// 用户登录响应
export const userLoginResponseSchema = baseSchema.extend({
  data: z.object({
    token: z.string(),
  }),
});
export type userLoginResponseType = z.infer<typeof userLoginResponseSchema>;

// 获取用户信息响应
export const getUserInfoResponseSchema = baseSchema.extend({
  data: z.object({
    name: z.string(),
    avatar: z.string(),
  }),
});
export type getUserInfoResponseType = z.infer<typeof getUserInfoResponseSchema>;
