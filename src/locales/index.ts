import { createI18n } from 'vue-i18n';

import enUs from './en-us/index';
import zhCn from './zh-cn/index';

// 语言包
const messages = {
  zhCn,
  enUs,
} as const;

// 语言类型
type LocaleType = keyof typeof messages;

// 语言选项
const localeOption: Record<LocaleType, any> = {
  zhCn: '简体中文',
  enUs: 'English',
};

// 创建 i18n 实例
const i18n = createI18n({
  // 使用 Composition API 模式，禁用传统 API
  legacy: false,
  // 默认语言为中文
  locale: 'zhCn',
  // 当语言文件中缺少翻译时，回退到英文
  fallbackLocale: 'enUs',
  // 启用全局注入，允许在组件中使用 `$t` 等方法
  globalInjection: true,
  // 语言包配置
  messages,
});

export default i18n;

export { localeOption };

export type { LocaleType };

export * from './element';
