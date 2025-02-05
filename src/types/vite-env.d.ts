/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 端口
  readonly VITE_PORT?: string;
  // crypto 密钥
  readonly VITE_CRYPTO_SECRET_KEY?: string;
  // api 地址
  readonly VITE_API_BASE_URL?: string;
  // mock 服务
  readonly VITE_MOCK_ENABLE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
