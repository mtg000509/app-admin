import CryptoJS from 'crypto-js';

// 从环境变量中读取密钥
const SECRET_KEY = import.meta.env.VITE_CRYPTO_SECRET_KEY || 'default-secret-key';

/**
 * 使用 SHA-256 对消息进行哈希处理
 * @param message - 要加密的消息
 * @returns 哈希后的字符串
 */
export const hashSHA256 = (message: string): string => {
  return CryptoJS.SHA256(message).toString();
};

/**
 * 使用 HMAC-SHA256 对消息进行哈希处理
 * @param data - 要加密的消息，可以是字符串或对象
 * @returns HMAC-SHA256 哈希后的字符串
 */
export const hmacSHA256 = (data: string | object): string => {
  // 如果消息是对象，将其转换为 JSON 字符串
  const stringData = typeof data === 'string' ? data : JSON.stringify(data);
  return CryptoJS.HmacSHA256(stringData, SECRET_KEY).toString();
};

/**
 * 加密数据
 * @param data - 要加密的字符串或对象
 * @returns 加密后的字符串
 */
export function aesEncrypt(data: string | object): string {
  const stringData = typeof data === 'string' ? data : JSON.stringify(data);
  return CryptoJS.AES.encrypt(stringData, SECRET_KEY).toString();
}

/**
 * 解密数据
 * @param cipherText - 加密的字符串
 * @returns 解密后的字符串或对象
 */
export function aesDecrypt<T = any>(cipherText: string): T | null {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData) as T;
  } catch {
    return null;
  }
}
