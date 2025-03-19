<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useLayout, useTheme, useUser } from '@/hooks';

import ContentArea from './components/content-area/index.vue';
import LogoTitle from './components/logo-title/index.vue';
import MenuList from './components/menu-list/index.vue';
import NavBar from './components/nav-bar/index.vue';

defineOptions({ name: 'Layout' });

const $route = useRoute();

const { menus } = useUser();

const { collapse } = useLayout();

// 默认选中菜单项
const defaultActive = ref<string>('');

watch(
  () => $route.path,
  () => {
    defaultActive.value = $route.path;
  },
  { immediate: true },
);

const { dark } = useTheme();

const getBoxShadow = () => {
  return {
    boxShadow: dark.value
      ? '2px 2px 10px rgb(255 255 255 / 5%)'
      : '2px 2px 10px rgb(128 128 128 / 5%)',
  };
};
</script>

<template>
  <div class="layout">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside
        class="aside"
        :class="{ fold: collapse }"
        :style="getBoxShadow()"
      >
        <!-- logo title -->
        <logo-title />
        <!-- 滚动菜单 -->
        <el-scrollbar>
          <el-menu
            :default-active="defaultActive"
            :collapse="collapse"
            class="scrollbar-menu"
          >
            <menu-list :menus="menus" />
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header class="header" :style="getBoxShadow()">
          <nav-bar />
        </el-header>
        <el-main class="main" :class="{ fold: collapse }">
          <content-area />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.aside,
.header,
.main {
  transition: all 0.3s ease-in-out;
}

.aside {
  width: $sidebar-width;
  overflow: hidden;

  &.fold {
    width: $sidebar-collapse-width;
  }

  .scrollbar-menu {
    margin-top: 15px;
    border: none;
  }
}

.header {
  padding: 0 5px;
}

.main {
  width: calc(100vw - $sidebar-width);
  height: calc(100vh - $navbar-height);
  padding: 10px;

  &.fold {
    width: calc(100vw - $sidebar-collapse-width);
  }
}
</style>
