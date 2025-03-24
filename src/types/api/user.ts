import { z } from 'zod';

interface LoginFormType {
  username: string;
  password: string;
}

const userLoginSchema = z.object({
  token: z.string(),
});

type UserLoginType = z.infer<typeof userLoginSchema>;

const userInfoSchema = z.object({
  name: z.string(),
  avatar: z.string(),
  username: z.string(),
  password: z.string(),
  phone: z.string().optional(),
  email: z.string().optional(),
});

type UserInfoType = z.infer<typeof userInfoSchema>;

export { userLoginSchema, userInfoSchema };

export type { LoginFormType, UserLoginType, UserInfoType };
