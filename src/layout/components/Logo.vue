<script setup lang="ts">
defineOptions({ name: 'LayoutLogo' });
</script>

<template>
  <div class="layout-logo">
    <img src="/logo.png" alt="Logo" />
    <p>APP ADMIN</p>
  </div>
</template>

<style scoped lang="scss">
.layout-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: $layout-header-height;

  img {
    width: 24px;
    height: 24px;
  }

  p {
    margin-left: 10px;
    font-size: $layout-title-font-size;
  }
}
</style>
