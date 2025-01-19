/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 端口
  readonly VITE_PORT?: string;
  // crypto 密钥
  readonly VITE_CRYPTO_SECRET_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
