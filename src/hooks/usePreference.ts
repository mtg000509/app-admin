import { preferences } from '@/preferences';

export const usePreference = () => {
  const title = preferences.title;

  const logoPath = preferences.logoPath;

  const helpUrl = preferences.helpUrl;

  return { title, logoPath, helpUrl };
};
