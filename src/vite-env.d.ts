/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 服务端口
  readonly VITE_APP_PORT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
