import { computed } from 'vue';

import { useUserStore } from '@/store';
import type { MessageMsg, SystemMsg } from '@/types';

export const useNotification = () => {
  const userStore = useUserStore();

  const notification = computed(() => userStore.notification);

  const addSystemMsg = (msg: SystemMsg) => {
    userStore.notification.system.push(msg);
  };

  const addMessageMsg = (msg: MessageMsg) => {
    userStore.notification.message.push(msg);
  };

  return { notification, addSystemMsg, addMessageMsg };
};
