/** @type {import("stylelint").Config} */
export default {
  // 拓展
  extends: [
    // 基础标准规则
    'stylelint-config-standard',
    // Recess 样式顺序规则
    'stylelint-config-recess-order',
    // Vue 文件的推荐配置
    'stylelint-config-recommended-vue',
    // SCSS 规则
    'stylelint-config-standard-scss',
    // 与 Prettier 兼容的 SCSS 配置
    'stylelint-config-prettier-scss',
  ],

  // 文件语法解析器
  overrides: [
    {
      // 针对样式文件和 Vue 文件使用 postcss-scss
      files: ['**/*.scss', '**/*.css', '**/*.vue'],
      customSyntax: 'postcss-scss',
    },
    {
      // 针对 HTML 和 Vue 文件使用 postcss-html
      files: ['**/*.html', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],

  // 忽略文件配置
  ignoreFiles: ['**/*.js', '**/*.ts', '**/*.json', '**/*.yaml', '**/*.md'],

  /**
   * 规则配置
   * @see https://stylelint.io/user-guide/rules/
   */
  rules: {
    // 禁止空源文件
    'no-empty-source': null,
    // 忽略以 `$` 开头的 SCSS 变量
    'declaration-property-value-no-unknown': [true, { ignoreProperties: { '/.+/': ['/\\$.+/'] } }],
    // 允许使用伪类
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep'] }],
    // 关闭强制类选择器的命名模式
    'selector-class-pattern': null,
  },
};
