interface LoginFormType {
  username: string;
  password: string;
}

interface LoginResType {
  token: string;
}

interface UserInfoType {
  name: string;
  avatar: string;
}

export type { LoginFormType, LoginResType, UserInfoType };
