import { acceptHMRUpdate, defineStore } from 'pinia';

// store id
const storeId = 'setting';

// storage key
const storageKey = storeId;

const useSettingStore = defineStore(
  storeId,
  () => {
    return {};
  },
  {
    persist: {
      key: storageKey,
      storage: sessionStorage,
      omit: [],
    },
  },
);

// HMR（热模块替换）
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingStore, import.meta.hot));
}

export { useSettingStore };
