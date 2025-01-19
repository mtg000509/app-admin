import { createI18n } from 'vue-i18n';

// 定义语言配置
const messages = {
  // 中文语言映射
  zhCn: {},
  // 英文语言映射
  en: {},
};

// 创建 i18n 实例
const i18n = createI18n({
  // 使用 Composition API 模式，禁用传统 API
  legacy: false,
  // 默认语言为中文
  locale: 'zhCn',
  // 当语言文件中缺少翻译时，回退到英文
  fallbackLocale: 'en',
  // 启用全局注入，允许在组件中使用 `$t` 等方法
  globalInjection: true,
  // 语言包配置
  messages,
});

export default i18n;
