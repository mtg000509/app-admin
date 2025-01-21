<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue';
import { languageList, setLanguage } from '@/locales';
import type { LanguageKeys } from '@/locales';

defineOptions({ name: 'NavBar' });

// 切换语言
const loginFunDropdown = (command: LanguageKeys) => {
  setLanguage(command);
};
// 跳转到 GitHub
const goToGitHub = () => {
  window.open('https://github.com/mtg000509/app-admin', '_blank');
};
</script>

<template>
  <div class="nav-bar">
    <el-dropdown @command="loginFunDropdown">
      <svg-icon name="language" color="black" width="24" height="24" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="(value, key) in languageList" :key="key" :command="key">
            {{ value }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-button circle @click="goToGitHub">
      <svg-icon name="github" color="black" width="24" height="24" />
    </el-button>
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  gap: 15px;
  align-items: center; /* 垂直居中 */
  justify-content: flex-end; /* 内容右对齐 */
  height: 50px;
  padding-right: 15px; /* 添加右侧内边距，避免内容贴边 */

  .el-button {
    background-color: transparent !important; /* 设置背景色为透明 */
    border: none !important; /* 移除边框 */
  }
}
</style>
