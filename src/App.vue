<script setup lang="ts">
import { useLocale } from '@/hooks';

defineOptions({ name: 'App' });

const { element } = useLocale();
</script>

<template>
  <el-config-provider :locale="element">
    <router-view />
  </el-config-provider>
</template>
