<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { useI18n } from 'vue-i18n';

import { useAccount } from '@/hooks';

defineOptions({ name: 'SafeManage' });

const { t } = useI18n();

const { userInfo } = useAccount();

const editSafeFields = () => {
  ElMessage.warning(t('account.safe.message.warning'));
};
</script>

<template>
  <div class="safe-manage">
    <h2 class="title">{{ $t('account.safe.title') }}</h2>

    <el-descriptions :title="$t('account.safe.desc.phone.title')">
      <template #extra>
        <el-button text type="primary" @click="editSafeFields">
          {{ $t('account.safe.button') }}
        </el-button>
      </template>
      <el-descriptions-item :label="$t('account.safe.desc.phone.label')">
        {{ userInfo?.phone }}
      </el-descriptions-item>
    </el-descriptions>

    <el-divider />

    <el-descriptions :title="$t('account.safe.desc.email.title')">
      <template #extra>
        <el-button text type="primary" @click="editSafeFields">
          {{ $t('account.safe.button') }}
        </el-button>
      </template>
      <el-descriptions-item :label="$t('account.safe.desc.email.label')">
        {{ userInfo?.email }}
      </el-descriptions-item>
    </el-descriptions>

    <el-divider />
  </div>
</template>

<style scoped lang="scss">
.safe-manage {
  width: 80%;

  .title {
    margin-bottom: 30px;
  }
}
</style>
