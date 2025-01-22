import { userLoginRequest } from '@/api/modules/user';
import { userLoginRequestSchema, type userLoginRequestType, userLoginResponseSchema } from '@/api/types/user';
import { hashSHA256, aesEncrypt, aesDecrypt } from '@/utils/crypto';

import { reactive, ref } from 'vue';

import { acceptHMRUpdate, defineStore } from 'pinia';

// Store ID
const storeId = 'user';

// 加密后的 Store ID
const shaStoreId = hashSHA256(storeId);

export const useUserStore = defineStore(
  // Store 名称，必须唯一
  storeId,
  () => {
    // 用户 token
    const userToken = ref<string>('');

    // 用户信息
    const userInfo = reactive({
      name: '',
      avatar: '',
    });

    // 用户登录
    const userLogin = async (data: userLoginRequestType) => {
      const checkData = userLoginRequestSchema.parse(data);
      const result = await userLoginRequest(checkData);
      const checkResult = userLoginResponseSchema.parse(result);
      userToken.value = checkResult.data.token;
      return checkResult;
    };

    return { userInfo, userLogin };
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
