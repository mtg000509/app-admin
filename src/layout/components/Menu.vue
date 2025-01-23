<script setup lang="ts">
defineProps({
  menuList: {
    type: Array as any,
    required: true,
  },
});

defineOptions({ name: 'LayoutMenu' });
</script>

<template>
  <template v-for="item in menuList" :key="item.path">
    <el-menu-item v-if="item.meta?.title" :index="item.path">
      <el-icon>
        <component :is="item.meta.icon" />
      </el-icon>
      <template #title>{{ item.meta.title }}</template>
    </el-menu-item>
  </template>
</template>
