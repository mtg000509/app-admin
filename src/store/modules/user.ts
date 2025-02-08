import { getUserInfoRequest, userLoginRequest } from '@/api/user';
import {
  getUserInfoResponseSchema,
  userLoginRequestSchema,
  userLoginResponseSchema,
  type userLoginRequestType,
} from '@/api/user/type';
import { staticRoutes } from '@/router/routes/static';
import { hashSHA256, aesEncrypt, aesDecrypt } from '@/utils/crypto';

import { ref } from 'vue';

import { acceptHMRUpdate, defineStore } from 'pinia';

const storeId = 'user';

const shaStoreId = hashSHA256(storeId);

export const useUserStore = defineStore(
  storeId,
  () => {
    // 用户 token
    const userToken = ref<string>('');

    // 用户登录
    const userLogin = async (data: userLoginRequestType) => {
      const checkData = userLoginRequestSchema.parse(data);
      const result = await userLoginRequest(checkData);
      const checkResult = userLoginResponseSchema.parse(result);
      userToken.value = checkResult.data.token;
      return checkResult;
    };

    // 用户信息类型
    type userInfoType = {
      name: string;
      avatar: string;
    } | null;

    // 用户信息
    const userInfo = ref<userInfoType>(null);

    // 获取用户信息
    const getUserInfo = async () => {
      const result = await getUserInfoRequest();
      const checkResult = getUserInfoResponseSchema.parse(result);
      if (checkResult.code === 200) {
        userInfo.value = checkResult.data;
        return checkResult;
      } else {
        return Promise.reject(new Error(checkResult.message));
      }
    };

    // 用户登出
    const userLogout = () => {
      userInfo.value = null;
    };

    // 菜单路由
    const menuRoutes = [...staticRoutes];

    return { userToken, userLogin, userInfo, getUserInfo, userLogout, menuRoutes };
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
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
