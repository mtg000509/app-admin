export default {
  back: 'Back',
  user: {
    title: 'Personal Information',
    label: {
      avatar: 'Avatar',
      name: 'Nickname',
      username: 'Username',
      password: 'Password',
    },
    button: {
      update: 'Update Information',
      reset: 'Reset Information',
    },
    message: {
      error: {
        type: 'File type only supports jpeg, png, svg!',
        size: 'File size cannot exceed 2MB!',
      },
      warning: 'This feature is not yet implemented and needs to be extended!',
    },
    rule: {
      name: {
        empty: 'Please enter a nickname',
        length: 'Nickname length should be 1 ~ 10 characters',
        invalid: 'Nickname can only contain English letters and numbers',
      },
      username: {
        empty: 'Please enter a username',
        length: 'Username length should be 5 ~ 11 characters',
        invalid: 'Username can only contain English letters and numbers',
      },
      password: {
        empty: 'Please enter a password',
        length: 'Password length should be 6 ~ 18 characters',
        invalid:
          'Password must contain at least three of the following: uppercase letters, lowercase letters, numbers, and special characters',
      },
    },
  },
  safe: {
    title: 'Account Security',
    desc: {
      phone: {
        title: 'Security Phone',
        label: 'Bound phone number:',
      },
      email: {
        title: 'Security Email',
        label: 'Bound email:',
      },
    },
    button: 'Modify',
    message: {
      warning: 'This feature is not yet implemented and needs to be extended!',
    },
  },
};
