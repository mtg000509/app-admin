import { useCssVar, useDark } from '@vueuse/core';
import { acceptHMRUpdate, defineStore } from 'pinia';
import { ref, useTemplateRef, watch } from 'vue';

import i18n, { type LocaleType } from '@/locales';
import { preferences } from '@/preferences';

interface SessionStorageData {
  locale?: LocaleType;
}

// store id
const storeId = 'setting';

// storage key
const storageKey = storeId;

const useSettingStore = defineStore(
  storeId,
  () => {
    // 语言
    const locale = ref<LocaleType>(i18n.global.locale.value);

    // 监听语言变化 同步到 i18n
    watch(
      () => locale.value,
      (newVal) => {
        i18n.global.locale.value = newVal;
      },
    );

    // 初始化语言
    const initializeLocale = () => {
      try {
        const session = window.sessionStorage?.getItem(storageKey) || '{}';
        const data = JSON.parse(session) as SessionStorageData;

        if (data?.locale) {
          locale.value = data.locale;
        }
      } catch (error) {
        console.error('Failed to initialize lang:', error);
      }
    };

    // 初始化语言
    initializeLocale();

    // 暗黑模式
    const isDark = useDark();

    // 初始化暗黑模式
    isDark.value = preferences.isDark || false;

    // DOM 元素 el
    const el = useTemplateRef<HTMLElement>('el');

    // 主题色
    const primaryColor = useCssVar('--el-color-primary', el);

    // 初始化主题色
    primaryColor.value = preferences.primaryColor || '#409eff';

    return { locale, isDark, primaryColor };
  },
  {
    persist: {
      key: storageKey,
      storage: sessionStorage,
      omit: [],
    },
  },
);

// HMR（热模块替换）
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingStore, import.meta.hot));
}

export { useSettingStore };
