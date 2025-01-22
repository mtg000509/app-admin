export default {
  form: {
    hello: '你好',
    welcome: '欢迎使用 App Admin',
    username: '请输入账号',
    password: '请输入密码',
  },
  button: {
    reset: '重置',
    submit: '登录',
  },
  rules: {
    username: {
      empty: '请输入账号',
      length: '账号长度: 5 ~ 10 位',
      invalid: '账号只能包含英文和数字',
    },
    password: {
      empty: '请输入密码',
      length: '密码长度: 5 ~ 10 位',
      invalid: '密码只能包含英文和数字',
    },
  },
};
