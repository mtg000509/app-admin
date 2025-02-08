import type { MockMethod } from 'vite-plugin-mock';

const userList = () => {
  return [
    {
      userId: 1,
      name: '用户',
      avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      username: 'users',
      password: '123456',
      token: 'Users Token',
    },
    {
      userId: 2,
      name: '管理员',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'admin',
      password: '123456',
      token: 'Admin Token',
    },
  ];
};

export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }: any) => {
      const { username, password } = body;
      const checkUser = userList().find((user) => user.username === username && user.password === password);
      if (!checkUser) {
        return {
          code: 201,
          message: {
            zhCn: '用户名或密码错误',
            en: 'Username or password error',
          },
          data: null,
        };
      }

      const { token } = checkUser;
      return {
        code: 200,
        message: {
          zhCn: '登录成功',
          en: 'Login success',
        },
        data: { token },
      };
    },
  },
  // 获取用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: (request: { headers: Record<string, string> }) => {
      // 获取请求头携带token
      const { token } = request.headers;
      // 查看用户信息是否包含有次token用户
      const checkUser = userList().find((item) => item.token === token);
      // 没有返回失败的信息
      if (!checkUser) {
        return {
          code: 201,
          message: {
            zhCn: '获取用户信息失败',
            en: 'Get user information failed',
          },
        };
      }
      // 如果有返回成功信息
      return {
        code: 200,
        message: {
          zhCn: '获取用户信息成功',
          en: 'Get user information success',
        },
        data: { ...checkUser },
      };
    },
  },
] as MockMethod[];
