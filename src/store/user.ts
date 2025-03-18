import { acceptHMRUpdate, defineStore } from 'pinia';
import { reactive, ref } from 'vue';

import { getUserInfoApi, userLoginApi } from '@/api';
import { basicRoutes } from '@/router';
import {
  type LoginFormType,
  userInfoSchema,
  type UserInfoType,
  userLoginSchema,
  type Notification,
} from '@/types';

import type { RouteRecordRaw } from 'vue-router';

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
      const { data } = await userLoginApi(userInfo);
      const validatedData = userLoginSchema.parse(data.data);
      token.value = validatedData.token;
      return data;
    };

    // 用户信息
    const userInfo = ref<UserInfoType | null>(null);

    // 获取用户信息
    const getUserInfo = async () => {
      const { data } = await getUserInfoApi();
      const validatedData = userInfoSchema.parse(data.data);
      userInfo.value = validatedData;
    };

    // 退出登录
    const userLogout = () => {
      token.value = null;
      userInfo.value = null;
    };

    // 菜单
    const menus: RouteRecordRaw[] = [...basicRoutes];

    // 通知
    const notification = reactive<Notification>({
      system: [],
      message: [],
    });

    return {
      token,
      userLogin,
      userInfo,
      getUserInfo,
      userLogout,
      menus,
      notification,
    };
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
