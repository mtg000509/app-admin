<script setup lang="ts">
import LoginForm from './components/LoginForm.vue';
import NavBar from './components/NavBar.vue';

defineOptions({ name: 'Login' });
</script>
<template>
  <div class="login">
    <NavBar />
    <LoginForm />
  </div>
</template>

<style scoped lang="scss">
.login {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: $background-color;
}
</style>
