export default {
  form: {
    hello: 'Hello',
    welcome: 'Welcome to App Admin',
    username: 'Please enter your username',
    password: 'Please enter your password',
  },
  button: {
    reset: 'Reset',
    submit: 'Login',
  },
  rules: {
    username: {
      empty: 'Please enter your username',
      length: 'Username length: 5 ~ 10 characters',
    },
    password: {
      empty: 'Please enter your password',
      length: 'Password length: 5 ~ 10 characters',
    },
  },
};
