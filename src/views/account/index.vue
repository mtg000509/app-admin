<script setup lang="ts">
import { ref, shallowRef, watch, type Component } from 'vue';
import { useRouter } from 'vue-router';

import { useTheme, useAccount } from '@/hooks';

import { routes } from './routes';

defineOptions({ name: 'Account' });

const $router = useRouter();

const { userInfo } = useAccount();

const { dark } = useTheme();

const getBoxShadow = () => {
  return {
    boxShadow: dark.value
      ? '2px 2px 10px rgb(255 255 255 / 5%)'
      : '2px 2px 10px rgb(128 128 128 / 5%)',
  };
};

// 返回上一页
const backHome = () => {
  $router.back();
};

// 默认选中菜单项
const defaultActive = ref<string>('/user-info');

// 动态组件
const dynamicComponent = shallowRef<Component | null>(null);

watch(
  () => defaultActive.value,
  (value) => {
    const component = routes.find((item) => item.path === value)?.component;
    dynamicComponent.value = component || null;
  },
  { immediate: true },
);

const selectMenu = (key: string) => {
  defaultActive.value = key;
};
</script>

<template>
  <div class="account">
    <el-container>
      <el-aside class="aside" :style="getBoxShadow()">
        <!-- 头部信息 -->
        <div class="header">
          <el-avatar :size="50" :src="userInfo?.avatar" />
          <span>{{ userInfo?.name }}</span>
        </div>

        <!-- 滚动菜单 -->
        <el-scrollbar class="scrollbar">
          <el-menu
            class="scrollbar-menu"
            :default-active="defaultActive"
            @select="selectMenu"
          >
            <template v-for="item in routes" :key="item.path">
              <el-menu-item v-if="!item.meta?.hidden" :index="item.path">
                <el-icon v-if="item.meta?.icon" :size="20">
                  <component :is="item.meta?.icon" />
                </el-icon>
                <span v-if="item.meta?.title">{{ item.meta?.title }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-scrollbar>

        <div class="footer">
          <el-button class="reset-style-btn" @click="backHome">
            <el-icon :size="20">
              <i-lets-icons:back />
            </el-icon>
            <span>{{ $t('account.back') }}</span>
          </el-button>
        </div>
      </el-aside>
      <el-main class="main">
        <transition name="fade" mode="out-in">
          <component :is="dynamicComponent" />
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.account {
  width: 100%;
  height: 100vh;
}

.aside {
  position: relative;
  width: $sidebar-width;
  height: 100vh;
  overflow: hidden;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    span {
      margin-top: 20px;
      font-size: 18px;
    }
  }

  .scrollbar {
    position: absolute;
    left: 50%;
    width: 80%;
    height: 300px;
    transform: translate(-50%);

    &-menu {
      margin-top: 15px;
      border: none;
    }
  }

  .footer {
    position: absolute;
    bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;

    span {
      font-size: 16px;
    }
  }
}

.main {
  width: calc(100% - $sidebar-width);
  height: calc(100vh - $navbar-height);
  padding: 50px 150px 20px;
  overflow: hidden;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease-in-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
}

.reset-style-btn {
  padding: 0;
  margin: 0 10px;
  border: none;

  &:hover {
    color: unset;
    background-color: transparent;
  }
}
</style>
