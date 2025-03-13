import path from 'path';

import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 加载当前环境的环境变量
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      vue(),
      vueDevTools(),
      viteMockServe({
        // Mock 数据存放路径
        mockPath: 'mock',
        // 监听 Mock 文件变化
        watchFiles: true,
        // 是否启用 Mock 数据
        enable: Boolean(env.VITE_MOCK_ENABLE) || false,
        // 是否输出日志
        logger: false,
      }),
      AutoImport({
        resolvers: [ElementPlusResolver(), IconsResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver(), IconsResolver()],
      }),
      Icons({
        autoInstall: true,
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
      // 服务端口，默认为 5173
      port: Number(env.VITE_APP_PORT) || 5173,
    },
  };
});
