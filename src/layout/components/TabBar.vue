<script setup lang="ts">
import { useSettingStore } from '@/store/modules/setting';
import { useUserStore } from '@/store/modules/user';

import { computed } from 'vue';

import { useRoute } from 'vue-router';

defineOptions({ name: 'TabBar' });

// 获取路由对象
const $route = useRoute();

// setting store
const settingStore = useSettingStore();

// 菜单折叠
const menuFold = computed(() => settingStore.menuFold);

// 折叠菜单
const changeMenuFold = () => {
  settingStore.menuFold = !settingStore.menuFold;
};

// user store
const userStore = useUserStore();

// 用户名
const userName = computed(() => userStore.userInfo?.name);

// 用户头像
const userAvatar = computed(() => userStore.userInfo?.avatar);
</script>
<template>
  <div class="tab-bar">
    <div class="breadcrumb">
      <el-icon @click="changeMenuFold">
        <component :is="menuFold ? 'Expand' : 'Fold'" />
      </el-icon>
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item
          v-for="(item, index) in $route.matched"
          v-show="item.meta.title"
          :key="index"
          :to="item.path"
        >
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="setting">
      <el-icon><FullScreen /></el-icon>
      <div class="user">
        <el-avatar :src="userAvatar" :size="25" shape="circle" />
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ userName }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tab-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  :deep(.el-breadcrumb__inner) {
    color: #eee;
  }

  .breadcrumb {
    display: flex;
    gap: 20px;
    align-items: center;
    height: 100%;

    :deep(.el-breadcrumb__inner) {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }

  .setting {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-right: 30px;

    .user {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
}
</style>
