<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';

import { useLayout } from '@/hooks';

defineOptions({ name: 'ContentArea' });

const { refresh } = useLayout();

// 控制当前组件是否销毁重建
const flag = ref(true);

// 监听父组件传来的刷新值，如果为true，则销毁重建当前组件
watch(
  () => refresh.value,
  () => {
    // 点击刷新按钮:路由组件销毁
    flag.value = false;
    nextTick(() => {
      flag.value = true;
    });
  },
);
</script>

<template>
  <div class="content-area">
    <!-- 路由组件出口的位置 -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <!-- 渲染layout一级路由组件的子路由 -->
        <component :is="Component" v-if="flag" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped lang="scss">
.content-area {
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 20px;
}

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
</style>
