import { reactive } from 'vue';

import type { Preferences } from '@/types/preferences';

export const preferences = reactive<Preferences>({
  isDark: false,
  primaryColor: '#409eff',
});
