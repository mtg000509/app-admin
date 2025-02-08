export default {
  form: {
    title: 'App Admin',
    username: 'Username',
    password: 'Password',
  },
  rules: {
    username: {
      empty: 'Please enter your username',
      length: 'Username length: 5 ~ 11 characters',
      invalid: 'Username can only contain letters and numbers',
    },
    password: {
      empty: 'Please enter your password',
      length: 'Password length: 6 ~ 18 characters',
      invalid: 'Password can only contain letters and numbers',
    },
  },
};
