import path from 'path';

import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 加载当前环境的环境变量
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        // 配置 '@' 为 src 目录的别名
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      // 使用环境变量指定端口，默认为 5173
      port: Number(env.VITE_PORT) || 5173,
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 全局 SCSS 变量注入
          additionalData: '@use "@/styles/variables.scss" as *;',
        },
      },
    },
  };
});
