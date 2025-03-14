import { acceptHMRUpdate, defineStore } from 'pinia';
import { ref } from 'vue';

import { getUserInfoApi, userLoginApi } from '@/api';
import type { LoginFormType, UserInfoType } from '@/types';

// store id
const storeId = 'user';

// storage key
const storageKey = storeId;

const useUserStore = defineStore(
  storeId,
  () => {
    // token
    const token = ref<string | null>(null);

    // 用户登录
    const userLogin = async (userInfo: LoginFormType) => {
      const res = await userLoginApi(userInfo);
      token.value = res.data.data.token;
      return res.data;
    };

    // 用户信息
    const userInfo = ref<UserInfoType | null>(null);

    // 获取用户信息
    const getUserInfo = async () => {
      const res = await getUserInfoApi();
      userInfo.value = res.data.data;
    };

    // 退出登录
    const userLogout = () => {
      token.value = null;
      userInfo.value = null;
    };

    return { token, userLogin, userInfo, getUserInfo, userLogout };
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
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

export { useUserStore };
