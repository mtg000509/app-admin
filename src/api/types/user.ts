import { z } from 'zod';

// 基础响应模型
const baseSchema = z.object({
  code: z.number(),
  message: z.string(),
  data: z.any(),
});

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
