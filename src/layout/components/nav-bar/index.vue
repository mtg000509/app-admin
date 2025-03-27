<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useLayout, useLocale, useTheme, useAccount } from '@/hooks';

defineOptions({ name: 'NavBar' });

const $router = useRouter();

const $route = useRoute();

const { userInfo, userLogout } = useAccount();

const { localeOption, locale } = useLocale();

const { dark, primaryColor } = useTheme();

const { collapse, refresh } = useLayout();

// 匹配路由
const matchRoute = computed(() => {
  return $route.matched.filter((item) => item.meta?.title);
});

// 全屏显示
const fullVisible = ref<boolean>(false);

// 全屏
const fullScreen = () => {
  // DOM对象的一个属性:可以用来判断当前是不是全屏模式[全屏:true 不是全屏:false]
  const full = document.fullscreenElement;
  // 切换为全屏模式
  if (full) {
    // 变为不是全屏模式->退出全屏模式
    document.exitFullscreen();
    fullVisible.value = false;
  } else {
    // 文档根节点的方法requestFullscreen 实现全屏模式
    document.documentElement.requestFullscreen();
    fullVisible.value = true;
  }
};

// 跳转账户设置
const skipAccount = () => {
  $router.push({ path: '/account' });
};

// 退出登录
const logout = () => {
  userLogout();

  $router.push({ path: '/login', query: { redirect: $route.path } });
};

// 通知标签
const tabActiveName = ref('notification');

// 抽屉可见性
const drawerVisible = ref<boolean>(false);

// 预设颜色
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
]);

// 重新加载
const reset = () => {
  window.sessionStorage.clear();
  window.location.reload();
};
</script>

<template>
  <div class="nav-bar">
    <div class="left">
      <!-- 折叠 -->
      <el-button class="reset-style-btn" @click="collapse = !collapse">
        <el-icon :size="25">
          <i-lets-icons:expand-left v-if="!collapse" />
          <i-lets-icons:expand-right v-else />
        </el-icon>
      </el-button>

      <!-- 面包屑 -->
      <el-breadcrumb separator=">">
        <el-breadcrumb-item
          v-for="(item, index) in matchRoute"
          :key="index"
          :to="item.path"
        >
          <el-icon>
            <component :is="item.meta.icon" />
          </el-icon>
          <span>{{ $t(item.meta.title as string) }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <!-- 刷新 -->
      <el-button class="reset-style-btn" @click="refresh = !refresh">
        <el-icon :size="20">
          <i-material-symbols:refresh />
        </el-icon>
      </el-button>

      <!-- 全屏 -->
      <el-button class="reset-style-btn" @click="fullScreen">
        <el-icon :size="20">
          <i-material-symbols:fullscreen v-if="!fullVisible" />
          <i-material-symbols:fullscreen-exit v-else />
        </el-icon>
      </el-button>

      <!-- 用户信息 -->
      <el-dropdown trigger="click">
        <span class="user-info">
          <el-avatar :size="25" :src="userInfo?.avatar" alt="avatar" />
          <span>{{ userInfo?.name }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="skipAccount">
              <el-icon :size="20">
                <i-lets-icons:user />
              </el-icon>
              <span>{{ $t('layout.button.account') }}</span>
            </el-dropdown-item>
            <el-dropdown-item @click="logout">
              <el-icon :size="20">
                <i-lets-icons:sign-out-circle />
              </el-icon>
              <span>{{ $t('layout.button.logout') }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <!-- 消息 -->
      <el-popover
        placement="bottom-start"
        :width="300"
        :offset="16"
        trigger="click"
      >
        <template #reference>
          <el-badge :value="3">
            <el-button class="reset-style-btn">
              <el-icon :size="20">
                <i-lets-icons:bell />
              </el-icon>
            </el-button>
          </el-badge>
        </template>
        <el-tabs v-model="tabActiveName" stretch>
          <el-tab-pane
            :label="$t('layout.popover.notification')"
            name="notification"
          >
            <el-empty
              :image-size="100"
              :description="$t('layout.popover.noNotification')"
            />
          </el-tab-pane>
          <el-tab-pane :label="$t('layout.popover.message')" name="message">
            <el-empty
              :image-size="100"
              :description="$t('layout.popover.noMessage')"
            />
          </el-tab-pane>
        </el-tabs>
      </el-popover>

      <!-- 设置 -->
      <el-button
        class="reset-style-btn"
        @click="drawerVisible = !drawerVisible"
      >
        <el-icon :size="20">
          <i-lets-icons:setting-alt-fill />
        </el-icon>
      </el-button>

      <!-- 抽屉 -->
      <el-drawer v-model="drawerVisible" :show-close="false" size="20%">
        <template #header="{ close, titleId, titleClass }">
          <h4 :id="titleId" :class="titleClass">
            {{ $t('layout.drawer.title') }}
          </h4>
          <el-button class="reset-style-btn" @click="close">
            <div class="icon-container">
              <el-icon :size="25" class="rotate-icon">
                <i-lets-icons:close-square />
              </el-icon>
            </div>
          </el-button>
        </template>
        <template #default>
          <el-form label-position="top">
            <el-form-item :label="$t('layout.drawer.locale')">
              <el-select v-model="locale">
                <el-option
                  v-for="(value, key) in localeOption"
                  :key="key"
                  :label="value"
                  :value="key"
                />
              </el-select>
            </el-form-item>
            <el-form-item :label="$t('layout.drawer.mode.title')">
              <el-radio-group v-model="dark">
                <el-radio-button :value="false">
                  <i-material-symbols:light-mode />
                  <span>{{ $t('layout.drawer.mode.light') }}</span>
                </el-radio-button>
                <el-radio-button :value="true">
                  <i-material-symbols:dark-mode />
                  <span>{{ $t('layout.drawer.mode.dark') }}</span>
                </el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item :label="$t('layout.drawer.themeColor')">
              <el-color-picker
                v-model="primaryColor"
                show-alpha
                :predefine="predefineColors"
              />
            </el-form-item>
          </el-form>
        </template>
        <template #footer>
          <el-tooltip
            :content="$t('layout.drawer.button.tooltip')"
            placement="top"
          >
            <el-button type="danger" @click="reset">
              {{ $t('layout.drawer.button.reset') }}
            </el-button>
          </el-tooltip>
        </template>
      </el-drawer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $navbar-height;
}

.left {
  display: inline-flex;
  gap: 10px;
  align-items: center;

  :deep(.el-breadcrumb__inner) {
    display: flex;
    gap: 5px;
    align-items: center;
    white-space: nowrap;
  }
}

.right {
  display: inline-flex;
  gap: 10px;
  align-items: center;
  margin-right: 10px;

  :deep(.el-badge__content.is-fixed) {
    top: 5px;
    right: 20px;
  }

  .user-info {
    display: inline-flex;
    gap: 10px;
    align-items: center;

    &:focus-visible {
      outline: none;
    }
  }

  :deep(.el-drawer__body) {
    padding: 0 20px;

    .el-form-item {
      margin-bottom: 30px;

      .el-form-item__label {
        margin-bottom: 15px;
      }
    }

    .el-select {
      width: 160px;
    }

    .el-radio-button__inner {
      display: inline-flex;
      gap: 5px;
      align-items: center;
      line-height: 20px;
    }

    .el-color-picker__trigger {
      border: none;
    }
  }

  :deep(.el-drawer__footer) {
    display: flex;
    justify-content: center;
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

.rotate-icon {
  transition: transform 0.3s ease;
}

.icon-container:hover .rotate-icon {
  transform: rotate(90deg);
}
</style>
