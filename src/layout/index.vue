<script setup lang="ts">
import { useSettingStore } from '@/store/modules/setting';
import { useUserStore } from '@/store/modules/user';

import NavLogo from './components/NavLogo.vue';
import NavMenu from './components/NavMenu.vue';
import TabBar from './components/TabBar.vue';

import { computed } from 'vue';

import { useRoute } from 'vue-router';

defineOptions({ name: 'Layout' });

// 获取路由对象
const $route = useRoute();

// user store
const userSoter = useUserStore();

// 菜单列表
const menuList = userSoter.menuRoutes;

// setting store
const settingStore = useSettingStore();

// 菜单折叠
const menuFold = computed(() => settingStore.menuFold);
</script>

<template>
  <div class="layout">
    <el-container>
      <el-aside :class="{ fold: menuFold }">
        <NavLogo />
        <el-scrollbar>
          <el-menu :collapse="menuFold" :default-active="$route.path" collapse-transition>
            <NavMenu :menuList="menuList" />
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header :class="{ fold: menuFold }">
          <TabBar />
        </el-header>
        <el-main :class="{ fold: menuFold }">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.layout {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  color: #eee;
  background-color: $background-color;

  .el-aside {
    width: $sidebar-width;
    height: 100vh;
    overflow: hidden;
    transition: all 0.8s;

    &.fold {
      width: $sidebar-min-width;
    }

    .el-menu {
      --el-menu-bg-color: transparent;
      --el-menu-text-color: #eee;

      min-width: $sidebar-min-width;
      border: none;

      :deep(.el-menu-item) {
        padding-left: 30px;
      }

      :deep(.el-sub-menu__title:hover) {
        background-color: #494949;
      }

      :deep(.el-menu-item:hover) {
        background-color: #494949;
      }

      :deep(.el-icon) {
        width: 35px;
        height: 35px;
      }
    }
  }

  .el-header {
    width: calc(100vw - $sidebar-width);
    height: $header-height;
    padding: 0;
    transition: all 0.8s;

    &.fold {
      width: calc(100vw - $sidebar-min-width);
    }
  }

  .el-main {
    width: calc(100vw - $sidebar-width);
    height: calc(100vh - $header-height);
    padding: 20px;
    background-color: antiquewhite;
    transition: all 0.8s;

    &.fold {
      width: calc(100vw - $sidebar-min-width);
    }
  }
}
</style>
