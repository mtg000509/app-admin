import { computed } from 'vue';

import { useSettingStore } from '@/store';

export const useTheme = () => {
  const settingStore = useSettingStore();

  const isDark = computed({
    get: () => settingStore.isDark,
    set: (dark: boolean) => {
      settingStore.isDark = dark;
    },
  });

  const primaryColor = computed({
    get: () => settingStore.primaryColor,
    set: (color: string) => {
      settingStore.primaryColor = color;
    },
  });

  return { isDark, primaryColor };
};
