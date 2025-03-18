<script setup lang="ts">
import { useLayout, usePreference } from '@/hooks';

defineOptions({ name: 'LogoTitle' });

const { title, logoPath } = usePreference();

const { collapse } = useLayout();
</script>

<template>
  <div class="logo-title">
    <img :src="logoPath" width="35" height="35" alt="logo" />
    <span v-if="!collapse" class="title">{{ title }}</span>
  </div>
</template>

<style scoped lang="scss">
.logo-title {
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  height: $navbar-height;
  white-space: nowrap;

  img {
    margin-left: 15px;
  }

  .title {
    font-size: 18px;
  }
}
</style>
