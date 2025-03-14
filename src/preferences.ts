import { reactive } from 'vue';

import type { Preferences } from '@/types';

export const preferences = reactive<Preferences>({
  isDark: false,
  primaryColor: '#409eff',
  title: 'APP ADMIN',
  logoPath: '/logo.png',
  helpUrl: 'https://github.com/mtg000509/app-admin',
});
