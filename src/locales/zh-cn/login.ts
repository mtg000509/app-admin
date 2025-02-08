export default {
  form: {
    title: 'App Admin',
    username: '请输入账号',
    password: '请输入密码',
  },
  rules: {
    username: {
      empty: '请输入账号',
      length: '账号长度: 5 ~ 11 位',
      invalid: '账号只能包含英文和数字',
    },
    password: {
      empty: '请输入密码',
      length: '密码长度: 6 ~ 18 位',
      invalid: '密码只能包含英文和数字',
    },
  },
};
