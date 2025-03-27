// 引入图表类型
import { BarChart, LineChart, PieChart } from 'echarts/charts';
// 引入组件
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from 'echarts/components';
// 引入核心模块
import * as echarts from 'echarts/core';
// 引入渲染器
import { CanvasRenderer } from 'echarts/renderers';

// 注册组件、图表和渲染器
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  PieChart,
  CanvasRenderer,
]);

export default echarts;
