<script setup lang="ts">
import LoginForm from '@/views/login/components/LoginForm.vue';
import NavBar from '@/views/login/components/NavBar.vue';

defineOptions({ name: 'Login' });
</script>

<template>
  <div class="login-container">
    <nav-bar />
    <login-form />
  </div>
</template>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/login/background.jpg') no-repeat;
  background-size: cover;
}
</style>
