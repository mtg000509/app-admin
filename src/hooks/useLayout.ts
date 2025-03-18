import { computed } from 'vue';

import { useSettingStore } from '@/store';

export const useLayout = () => {
  const settingStore = useSettingStore();

  const collapse = computed({
    get: () => settingStore.collapse,
    set: (collapse: boolean) => {
      settingStore.collapse = collapse;
    },
  });

  const refresh = computed({
    get: () => settingStore.refresh,
    set: (refresh: boolean) => {
      settingStore.refresh = refresh;
    },
  });
  return { collapse, refresh };
};
