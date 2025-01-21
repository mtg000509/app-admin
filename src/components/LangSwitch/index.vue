<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue';
import { languageList } from '@/locales';
import { useSettingStore } from '@/store/modules/setting';

defineOptions({ name: 'LangSwitch' });

console.log(languageList);

const settingStore = useSettingStore();

console.log(settingStore.currentLanguage);
</script>

<template>
  <div class="lang-switch">
    <el-dropdown>
      <el-button circle>
        <svg-icon name="language" color="black" width="24" height="24" />
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="(key, value) in languageList" :key="key">{{ value }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped lang="scss">
.lang-switch {
  .el-button {
    background-color: transparent !important; /* 设置背景色为透明 */
    border: none !important; /* 移除边框 */
  }
}
</style>
