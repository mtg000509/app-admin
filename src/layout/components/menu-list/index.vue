<script setup lang="ts">
import { useRouter, type RouteRecordRaw } from 'vue-router';

defineOptions({ name: 'MenuList' });

const { menus } = defineProps<{
  menus: RouteRecordRaw[];
}>();

const $router = useRouter();

const goRoute = (value: any) => {
  $router.push(value.index);
};
</script>

<template>
  <template v-for="item in menus" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item
        v-if="!item.meta?.hidden"
        :index="item.path"
        @click="goRoute"
      >
        <el-icon v-if="item.meta?.icon" :size="20">
          <component :is="item.meta?.icon" />
        </el-icon>
        <template v-if="item.meta?.title" #title>
          {{ $t(item.meta.title as string) }}
        </template>
      </el-menu-item>
    </template>

    <!-- 只有一个子路由 -->
    <template v-else-if="item.children.length === 1">
      <el-menu-item
        v-if="!item.children[0].meta?.hidden"
        :index="item.children[0].path"
        @click="goRoute"
      >
        <el-icon v-if="item.children[0].meta?.icon" :size="20">
          <component :is="item.children[0].meta?.icon" />
        </el-icon>
        <template v-if="item.children[0].meta?.title" #title>
          {{ $t(item.children[0].meta.title as string) }}
        </template>
      </el-menu-item>
    </template>

    <!-- 子路由大于一个 -->
    <template v-else-if="item.children.length > 1">
      <el-sub-menu v-if="!item.meta?.hidden" :index="item.path">
        <template #title>
          <el-icon v-if="item.meta?.icon" :size="20">
            <component :is="item.meta?.icon" />
          </el-icon>
          <span v-if="item.meta?.title">
            {{ $t(item.meta.title as string) }}
          </span>
        </template>

        <!-- 递归组件 -->
        <menu-list :menus="item.children" />
      </el-sub-menu>
    </template>
  </template>
</template>
