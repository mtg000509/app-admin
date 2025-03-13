import { computed } from 'vue';

import { type LocaleType, elementOption } from '@/locales';
import { useSettingStore } from '@/store';

export const useLocale = () => {
  const settingStore = useSettingStore();

  const locale = computed({
    get: () => settingStore.locale,
    set: (language: LocaleType) => {
      settingStore.locale = language;
    },
  });

  const element = computed(() => elementOption[locale.value]);

  return { locale, element };
};
