<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

import echarts from '@/utils/echarts';

import type { EChartsOption } from 'echarts';

defineOptions({ name: 'ECharts' });

interface Props {
  options: EChartsOption;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
});

const chartRef = ref<HTMLDivElement | null>(null);

let chartInstance: echarts.ECharts | null = null;

// 初始化 ECharts 图表
const initChart = () => {
  if (chartRef.value) {
    chartInstance = echarts.init(chartRef.value);
    chartInstance.setOption(props.options);
  }
};

// 监听 props 中 option 的变化
watch(
  () => props.options,
  () => {
    nextTick(() => {
      chartInstance?.setOption(props.options);
    });
  },
  { deep: true },
);

// 在组件挂载后初始化图表
onMounted(() => {
  initChart();
});

// 销毁图表实例
const destroyChart = () => {
  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = null;
  }
};

// 组件销毁时销毁图表实例
onBeforeUnmount(() => {
  destroyChart();
});
</script>

<template>
  <div ref="chartRef" class="chart" />
</template>

<style scoped lang="scss">
.chart {
  width: 100%;
  height: 100%;
}
</style>
