/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 服务端口
  readonly VITE_APP_PORT?: string;
  // API 地址
  readonly VITE_API_BASE_UR?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
