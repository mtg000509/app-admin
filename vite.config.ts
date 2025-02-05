import path from 'path';

import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 加载当前环境的环境变量
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      vue(),
      vueDevTools(),
      createSvgIconsPlugin({
        // svg 图标文件夹路径
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // SVG Symbol ID 格式
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        // Mock 数据存放路径
        mockPath: 'mock',
        // 监听 Mock 文件变化
        watchFiles: true,
        // 是否启用 Mock 数据
        enable: env.VITE_MOCK_ENABLE === 'true',
        // 是否输出日志
        logger: false,
      }),
    ],
    resolve: {
      alias: {
        // 配置 '@' 为 src 目录的别名
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 全局 SCSS 变量注入
          additionalData: '@use "@/styles/variables.scss" as *;',
        },
      },
    },
    server: {
      // 使用环境变量指定端口，默认为 5173
      port: Number(env.VITE_PORT) || 5173,
    },
  };
});
