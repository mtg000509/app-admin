<script setup lang="ts">
defineOptions({ name: 'NavLogo' });
</script>
<template>
  <div class="nav-logo">
    <el-avatar src="/logo.png" :size="35" shape="circle" />
    <div class="title">APP ADMIN</div>
  </div>
</template>

<style scoped lang="scss">
.nav-logo {
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: $header-height;
  padding-left: 30px;

  .title {
    max-width: calc(100% - 85px);
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
