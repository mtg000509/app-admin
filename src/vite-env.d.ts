/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 服务端口
  readonly VITE_APP_PORT?: string;
  // API 地址
  readonly VITE_API_BASE_UR?: string;
  // 接口模拟服务
  readonly VITE_MOCK_ENABLE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
