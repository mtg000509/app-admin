import { computed } from 'vue';

import { useSettingStore } from '@/store';

export const useTheme = () => {
  const settingStore = useSettingStore();

  const dark = computed({
    get: () => settingStore.dark,
    set: (isDark: boolean) => {
      settingStore.dark = isDark;
    },
  });

  const primaryColor = computed({
    get: () => settingStore.primaryColor,
    set: (color: string) => {
      settingStore.primaryColor = color;
    },
  });

  return { dark, primaryColor };
};
