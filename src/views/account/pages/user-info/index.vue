<script setup lang="ts">
import {
  ElMessage,
  type FormInstance,
  type FormRules,
  type UploadInstance,
  type UploadProps,
} from 'element-plus';
import { onMounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { useAccount } from '@/hooks';
import type { UserInfoType } from '@/types';

defineOptions({ name: 'UserInfo' });

const { t } = useI18n();

const { userInfo } = useAccount();

const userInfoFormRef = ref<FormInstance>();

const userInfoFormData = reactive<UserInfoType>({
  name: '',
  avatar: '',
  username: '',
  password: '',
});

onMounted(() => {
  Object.assign(userInfoFormData, userInfo);
});

const userInfoFormRules = reactive<FormRules<UserInfoType>>({
  name: [
    {
      required: true,
      message: t('account.user.rule.name.empty'),
      trigger: 'change',
    },
    {
      min: 1,
      max: 10,
      message: t('account.user.rule.name.length'),
      trigger: 'change',
    },
    {
      pattern: /^[A-Za-z0-9]+$/,
      message: t('account.user.rule.name.invalid'),
      trigger: 'change',
    },
  ],
  username: [
    {
      required: true,
      message: t('account.user.rule.username.empty'),
      trigger: 'change',
    },
    {
      min: 5,
      max: 11,
      message: t('account.user.rule.username.length'),
      trigger: 'change',
    },
    {
      pattern: /^[A-Za-z0-9]+$/,
      message: t('account.user.rule.username.invalid'),
      trigger: 'change',
    },
  ],
  password: [
    {
      required: true,
      message: t('account.user.rule.password.empty'),
      trigger: 'change',
    },
    {
      min: 6,
      max: 18,
      message: t('account.user.rule.password.length'),
      trigger: 'change',
    },
    {
      pattern:
        /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/,
      message: t('account.user.rule.password.invalid'),
      trigger: 'change',
    },
  ],
});

const uploadRef = ref<UploadInstance>();

const handleAvatarChange: UploadProps['onChange'] = (uploadFile) => {
  const avatarType = ['image/jpeg', 'image/png', 'image/svg+xml'];

  const { size, type } = uploadFile.raw!;

  if (!avatarType.includes(type)) {
    ElMessage.error(t('account.user.message.error.type'));
    uploadRef.value!.clearFiles();
    return;
  }

  if (size / 1024 / 1024 > 2) {
    ElMessage.error(t('account.user.message.error.size'));
    uploadRef.value!.clearFiles();
    return;
  }

  userInfoFormData.avatar = URL.createObjectURL(uploadFile.raw!);
};

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;

  const isValid = formEl.validate();
  if (!isValid) return;

  ElMessage.warning(t('account.user.message.warning'));
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  Object.assign(userInfoFormData, userInfo);
};
</script>

<template>
  <div class="user-info">
    <h2 class="title">{{ $t('account.user.title') }}</h2>

    <el-form
      ref="userInfoFormRef"
      label-position="top"
      :model="userInfoFormData"
      :rules="userInfoFormRules"
      status-icon
    >
      <el-form-item :label="$t('account.user.label.avatar')">
        <el-upload
          ref="uploadRef"
          action="#"
          :auto-upload="false"
          :limit="1"
          :show-file-list="false"
          :on-change="handleAvatarChange"
        >
          <div v-if="!userInfoFormData.avatar" class="avatar">
            <el-icon :size="30">
              <i-lets-icons:add />
            </el-icon>
          </div>
          <el-avatar v-else :size="80" :src="userInfoFormData.avatar" />
        </el-upload>
      </el-form-item>
      <el-form-item :label="$t('account.user.label.name')" prop="name">
        <el-input v-model="userInfoFormData.name" />
      </el-form-item>
      <el-form-item :label="$t('account.user.label.username')" prop="username">
        <el-input v-model="userInfoFormData.username" />
      </el-form-item>
      <el-form-item :label="$t('account.user.label.password')" prop="password">
        <el-input v-model="userInfoFormData.password" />
      </el-form-item>
      <div class="footer">
        <el-button type="primary" @click="submitForm(userInfoFormRef)">
          {{ $t('account.user.button.update') }}
        </el-button>
        <el-button @click="resetForm(userInfoFormRef)">
          {{ $t('account.user.button.reset') }}
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.user-info {
  width: 80%;

  .title {
    margin-bottom: 30px;
  }

  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border: 1px solid rgba(128 128 128 / 50%);
  }

  :deep(.el-form-item) {
    margin-bottom: 20px;

    .el-form-item__label {
      font-weight: 600;
    }
  }

  .el-input {
    width: 500px;
  }

  .footer {
    margin-top: 40px;

    .el-button {
      margin-right: 40px;
    }
  }
}
</style>
