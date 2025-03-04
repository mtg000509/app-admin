export default {
  // 针对 JSON 和 Markdown 文件
  '*.{json,md}': ['prettier --write'],
  // 针对 JavaScript 和 TypeScript 文件
  '*.{js,ts}': ['eslint --fix', 'prettier --write'],
  // 针对 CSS 和 SCSS 文件
  '*.{css,scss}': ['stylelint --fix', 'prettier --write'],
  // 针对 Vue 和 HTML 文件
  '*.{vue,html}': ['stylelint --fix', 'eslint --fix', 'prettier --write'],
};
