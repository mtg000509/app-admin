import i18n from '@/locales';
import { hashSHA256, aesEncrypt, aesDecrypt } from '@/utils/crypto';

import { ref, watch } from 'vue';

import { acceptHMRUpdate, defineStore } from 'pinia';

// Store ID
const storeId = 'setting';

// 加密后的 Store ID
const shaStoreId = hashSHA256(storeId);

export const useSettingStore = defineStore(
  // Store 名称，必须唯一
  storeId,
  () => {
    // 当前语言
    const currentLanguage = ref<string>(i18n.global.locale.value);

    // 监听 vue-i18n 的当前语言
    watch(
      () => i18n.global.locale.value,
      (newValue) => {
        currentLanguage.value = newValue;
      },
    );

    // 如果 sessionStorage 存在设置语言则加载语言
    const sessionData = aesDecrypt(sessionStorage.getItem(shaStoreId) || '');
    if (sessionData?.currentLanguage) {
      i18n.global.locale.value = sessionData.currentLanguage;
    }

    return { currentLanguage };
  },
  {
    // 持久化配置
    persist: {
      // 存储键名
      key: shaStoreId,
      // 存储方式
      storage: sessionStorage,
      serializer: {
        // 自定义序列化函数
        serialize: (state) => aesEncrypt(state),
        // 自定义反序列化函数
        deserialize: (encryptedData) => aesDecrypt(encryptedData) || {},
      },
      // 指定不持久化的数据，[] 或 undefined 表示整个状态持续存在
      omit: [],
    },
  },
);

// HMR（热模块替换）
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingStore, import.meta.hot));
}
