<script setup lang="ts">
import { languageList } from '@/locales';
import type { LanguageKeys } from '@/locales';
import { useSettingStore } from '@/store/modules/setting';

defineOptions({ name: 'NavBar' });

// 获取 setting store 实例
const settingStore = useSettingStore();

// 切换语言
const loginFunDropdown = (command: LanguageKeys) => {
  settingStore.setLanguage(command);
};

// 跳转到 GitHub
const goToGitHub = () => {
  window.location.href = 'https://github.com/mtg000509/app-admin';
};
</script>
<template>
  <div class="nav-bar">
    <el-dropdown @command="loginFunDropdown">
      <svg-icon name="language" color="white" width="30" height="30" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="(value, key) in languageList" :key="key" :command="key">
            {{ value }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-button circle @click="goToGitHub">
      <svg-icon name="github" color="white" width="30" height="30" />
    </el-button>
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: $header-height;
  padding-right: 20px;

  .el-button {
    background: transparent;
    border: none;
  }
}
</style>
