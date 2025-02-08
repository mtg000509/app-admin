import i18n, { type LanguageKeys } from '@/locales';
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
    const language = ref<string>(i18n.global.locale.value);

    // 监听 vue-i18n 的当前语言
    watch(
      () => i18n.global.locale.value,
      (newValue) => {
        language.value = newValue;
      },
    );

    // 如果 sessionStorage 存在设置语言则加载语言
    const sessionData = aesDecrypt(sessionStorage.getItem(shaStoreId) || '');
    if (sessionData?.currentLanguage) {
      i18n.global.locale.value = sessionData.currentLanguage;
    }

    // 设置语言
    const setLanguage = (language: LanguageKeys) => {
      i18n.global.locale.value = language;
    };

    // 菜单折叠
    const menuFold = ref<boolean>(false);

    return { language, setLanguage, menuFold };
  },
  {
    persist: {
      key: shaStoreId,
      storage: sessionStorage,
      serializer: {
        serialize: (state) => aesEncrypt(state),
        deserialize: (encryptedData) => aesDecrypt(encryptedData) || {},
      },
      omit: [],
    },
  },
);
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingStore, import.meta.hot));
}
