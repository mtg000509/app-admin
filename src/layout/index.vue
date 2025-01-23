<script setup lang="ts">
import LayoutLogo from '@/layout/components/Logo.vue';

defineOptions({ name: 'Layout' });
</script>

<template>
  <el-container class="layout-container">
    <el-aside class="layout-aside">
      <layout-logo />
      <div class="layout-aside-menu">menu</div>
    </el-aside>
    <el-container>
      <el-header class="layout-header">Header</el-header>
      <el-main class="layout-main">Main</el-main>
    </el-container>
  </el-container>
  <!--  <el-container class="layout-container">-->
  <!--    &lt;!&ndash; 顶部导航栏 &ndash;&gt;-->
  <!--    <el-header class="layout-header">-->
  <!--      <el-row>-->
  <!--        &lt;!&ndash; 左侧图标和标题 &ndash;&gt;-->
  <!--        <el-col :span="6"><layout-logo /></el-col>-->
  <!--        &lt;!&ndash; 面包屑 &ndash;&gt;-->
  <!--        <el-col :span="12"><layout-breadcrumb /></el-col>-->
  <!--        &lt;!&ndash; 右侧快捷键 &ndash;&gt;-->
  <!--        <el-col :span="6"><layout-setting /></el-col>-->
  <!--      </el-row>-->
  <!--    </el-header>-->
  <!--    <el-container>-->
  <!--      &lt;!&ndash; 左侧菜单栏 &ndash;&gt;-->
  <!--      <el-aside class="layout-aside">-->
  <!--        &lt;!&ndash; 展示菜单 滚动组件 &ndash;&gt;-->
  <!--        <el-scrollbar>-->
  <!--          &lt;!&ndash; 菜单组件 &ndash;&gt;-->
  <!--          <el-menu>-->
  <!--            <layout-aside :menuList="staticRoutes" />-->
  <!--          </el-menu>-->
  <!--        </el-scrollbar>-->
  <!--      </el-aside>-->
  <!--      &lt;!&ndash; 右侧内容区 &ndash;&gt;-->
  <!--      <el-main class="layout-main">-->
  <!--        <layout-main />-->
  <!--      </el-main>-->
  <!--    </el-container>-->
  <!--  </el-container>-->
</template>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;

  .layout-aside {
    width: $layout-aside-width;
    height: 100vh;
  }

  .layout-header {
    width: calc(100vw - $layout-aside-width);
    height: $layout-header-height;
  }

  .layout-main {
    width: calc(100vw - $layout-aside-width);
    height: calc(100vh - $layout-header-height);
    padding: 20px;
    overflow: auto;
  }
}
</style>
