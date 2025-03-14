<script setup lang="ts">
import { useLocale, usePreference, useTheme } from '@/hooks';

defineOptions({ name: 'NavBar' });

const { title, logoPath, helpUrl } = usePreference();

const { dark } = useTheme();

const { localeOption, locale } = useLocale();

const toggleLocale = (command: string) => {
  locale.value = command as any;
};

const help = () => {
  window.location.href = helpUrl || '';
};
</script>

<template>
  <div class="nav-bar">
    <!-- logo 标题 -->
    <div class="logo">
      <img :src="logoPath" alt="logo" />
      <div class="title">{{ title }}</div>
    </div>

    <!-- 设置 -->
    <div class="setting">
      <!-- 暗色模式 -->
      <el-button text @click="dark = !dark">
        <el-icon :size="25">
          <i-material-symbols:light-mode v-if="!dark" />
          <i-material-symbols:dark-mode v-else />
        </el-icon>
      </el-button>

      <!-- 国际化 -->
      <el-dropdown @command="toggleLocale">
        <el-button text>
          <el-icon :size="25">
            <i-material-symbols:translate />
          </el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="(value, key) in localeOption"
              :key="key"
              :command="key"
              :disabled="locale === key"
            >
              {{ value }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <!-- 帮助 -->
      <el-button text @click="help">
        <el-icon :size="25">
          <i-material-symbols:info-i />
        </el-icon>
      </el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: $navbar-height;
  padding: 0 20px;
  background-color: transparent;
}

.logo {
  display: inline-flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    pointer-events: none;
  }

  .title {
    margin: 0 20px;
    font-size: 20px;
  }
}

.el-button {
  padding: 0;
  margin: 0 10px;

  &.is-text:not(.is-disabled) {
    &:hover {
      background-color: transparent;
    }

    &:focus-visible {
      outline: none;
    }
  }
}
</style>
