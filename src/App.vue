<script setup lang="ts">
import type { LanguageKeys } from '@/locales';
import { elementLanguage } from '@/locales/element';
import { useSettingStore } from '@/store/modules/setting';

import { computed } from 'vue';

defineOptions({ name: 'App' });
const settingStore = useSettingStore();
const locale = computed(() => {
  return elementLanguage[settingStore.currentLanguage as LanguageKeys];
});
</script>

<template>
  <!-- 国际化 -->
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>
