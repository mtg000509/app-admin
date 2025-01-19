<script setup lang="ts">
import { computed } from 'vue';

// 定义 props 并设置默认值
const props = withDefaults(
  defineProps<{
    // SVG 图标的前缀
    prefix?: string;
    // SVG 图标的名称（必填）
    name: string;
    // SVG 图标的颜色
    color?: string;
    // SVG 图标宽度
    width?: string | number;
    // SVG 图标高度
    height?: string | number;
  }>(),
  {
    prefix: '#icon-',
    color: '',
    width: '16px',
    height: '16px',
  },
);

// 设置组件选项
defineOptions({ name: 'SvgIcon' });

// 计算 :href 的值
const iconHref = computed(() => `${props.prefix}${props.name}`);

// 根据类型计算 svg 样式
const svgStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
}));
</script>

<template>
  <div>
    <svg :style="svgStyle" class="svg-icon">
      <use :href="iconHref" :fill="color" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.svg-icon {
  display: inline-block;
  vertical-align: middle;
  fill: #000;
}
</style>
