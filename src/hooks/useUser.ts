import { useUserStore } from '@/store';

export const useUser = () => {
  const { userInfo, userLogin, userLogout, menus } = useUserStore();

  return { userInfo, userLogin, userLogout, menus };
};
