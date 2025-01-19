export default {
  // 继承的规则集
  extends: ['@commitlint/config-conventional'],

  /*  规则配置 0 禁用 1 警告 2 错误 always 总是应用此规则 never 从不应用此规则 */
  rules: {
    // 提交类型枚举，git 提交 type 必须是以下类型
    'type-enum': [
      2,
      'always',
      [
        // 适用于构建系统或外部依赖的更改
        'build',
        // 用于日常维护或其他不涉及代码功能的更改
        'chore',
        // 持续集成（CI）相关的更改
        'ci',
        // 文档相关的更改
        'docs',
        // 新增功能
        'feat',
        // 修复 Bug
        'fix',
        // 性能优化
        'perf',
        // 代码重构
        'refactor',
        // 回滚提交，用于恢复先前的某次提交
        'revert',
        // 代码风格相关的更改
        'style',
        // 测试相关的更改
        'test',
      ],
    ],
    // 提交消息必须有 `type`
    'type-empty': [2, 'never'],
    // 关闭 scope 大小写强制
    'scope-case': [0],
    // `scope` 不能为空
    'scope-empty': [2, 'never'],
    // `subject` 不能为空
    'subject-empty': [2, 'never'],
    // 不强制 `subject` 的大小写
    'subject-case': [0],
    // `subject` 不得超过 50 个字符
    'subject-max-length': [2, 'always', 50],
  },
};
