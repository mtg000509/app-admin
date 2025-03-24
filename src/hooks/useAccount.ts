import { useUserStore } from '@/store';

export const useAccount = () => {
  const { token, userInfo, userLogin, userLogout, menus } = useUserStore();

  return { token, userInfo, userLogin, userLogout, menus };
};
