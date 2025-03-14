<script setup lang="ts">
import { useTheme } from '@/hooks';

import LoginForm from './components/login-form/index.vue';
import NavBar from './components/nav-bar/index.vue';

defineOptions({ name: 'Login' });

const { dark } = useTheme();
// 获取星星样式
const getStarStyle = () => {
  // 背景色
  const color = dark.value ? '#ffffff' : '#000000';
  // 水平位置
  const left = Math.random() * 100;
  // 垂直位置
  const top = Math.random() * 100;
  // 大小
  const size = 1 + Math.random() * 2;
  // 亮度范围
  const brightness = 0.7 + Math.random() * 0.3;
  // 延迟
  const delay = Math.random() * 5;

  return {
    backgroundColor: color,
    left: `${left}%`,
    top: `${top}%`,
    width: `${size}px`,
    height: `${size}px`,
    opacity: brightness,
    animationDelay: `${delay}s`,
  };
};
</script>

<template>
  <div class="login">
    <!-- 导航栏 -->
    <nav-bar />

    <!-- 登录表单 -->
    <login-form />

    <!-- 背景 -->
    <div class="bg">
      <span v-for="i in 100" :key="i" :style="getStarStyle()"></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  span {
    position: absolute;
    border-radius: 50%;
    box-shadow: 0 0 5px rgb(255 255 255 / 80%);
    animation: twinkle 2s ease-in-out infinite;
  }

  @keyframes twinkle {
    0% {
      opacity: 0.7;
      transform: scale(1);
    }

    50% {
      opacity: 1;
      transform: scale(1.5);
    }

    100% {
      opacity: 0.7;
      transform: scale(1);
    }
  }
}
</style>
