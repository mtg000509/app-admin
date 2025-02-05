import { hashSHA256, aesEncrypt, aesDecrypt } from '@/utils/crypto';

import { acceptHMRUpdate, defineStore } from 'pinia';

// Store ID
const storeId = 'setting';

// 加密后的 Store ID
const shaStoreId = hashSHA256(storeId);

const useSettingStore = defineStore(
  // Store 名称，必须唯一
  storeId,
  () => {
    return {};
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
      // 指定需要持久化的状态字段，[] 表示不持久化任何状态
      pick: [],
    },
  },
);

// HMR（热模块替换）
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingStore, import.meta.hot));
}

export default useSettingStore;
