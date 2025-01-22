<script setup lang="ts">
import LayoutLogo from '@/layout/components/Logo.vue';
import LayoutSetting from '@/layout/components/Setting.vue';

defineOptions({ name: 'Layout' });
</script>

<template>
  <div class="layout-container">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12"><layout-logo /></el-col>
          <el-col :span="12"><layout-setting /></el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside>Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;

  /*  .el-header {
    height: $layout-header-height;
  }

  .el-aside {
    width: $layout-aside-width;
    height: calc(100vh - $layout-header-height);
  }

  .el-main {
    width: calc(100% - $layout-aside-width);
    height: calc(100vh - $layout-header-height);
    padding: 20px;
    overflow: auto; !* 内容溢出，浏览器会自动显示滚动条 *!
  } */
}
</style>
