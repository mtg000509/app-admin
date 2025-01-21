import { hashSHA256, aesEncrypt, aesDecrypt } from '@/utils/crypto';

import { reactive } from 'vue';

import { acceptHMRUpdate, defineStore } from 'pinia';

// Store ID
const storeId = 'user';

// 加密后的 Store ID
const shaStoreId = hashSHA256(storeId);

export const useUserStore = defineStore(
  // Store 名称，必须唯一
  storeId,
  () => {
    // 用户信息
    const userInfo = reactive({
      name: '',
      avatar: '',
    });

    return { userInfo };
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
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
