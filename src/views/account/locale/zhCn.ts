export default {
  back: '返回',
  user: {
    title: '个人信息',
    label: {
      avatar: '头像',
      name: '昵称',
      username: '账户名',
      password: '密码',
    },
    button: {
      update: '更新信息',
      reset: '重置信息',
    },
    message: {
      error: {
        type: '文件类型仅支持 jpeg、png、svg!',
        size: '文件大小不能超过 2MB!',
      },
      warning: '暂未实现该功能，需自行拓展！',
    },
    rule: {
      name: {
        empty: '请输入昵称',
        length: '昵称长度为 1 ~ 10 位',
        invalid: '昵称只能包含英文、数字',
      },
      username: {
        empty: '请输入账户名',
        length: '账户名长度为 5 ~ 11 位',
        invalid: '账户名只能包含英文和数字',
      },
      password: {
        empty: '请输入密码',
        length: '密码长度为 6 ~ 18 位',
        invalid: '密码要求大写字母、小写字母、数字、特殊字符中任意三项组成',
      },
    },
  },
  safe: {
    title: '账户安全',
    desc: {
      phone: {
        title: '密保手机',
        label: '已经绑定手机：',
      },
      email: {
        title: '密保邮箱',
        label: '已经绑定邮箱：',
      },
    },
    button: '修改',
    message: {
      warning: '暂未实现该功能，需自行拓展！',
    },
  },
};
