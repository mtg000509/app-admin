<script setup lang="ts">
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import { reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { useUserStore } from '@/store';
import type { LoginFormType } from '@/types';

defineOptions({ name: 'LoginForm' });

const { t } = useI18n();

const $router = useRouter();

const { userLogin } = useUserStore();

const loginFormRef = ref<FormInstance>();

const loginFormData = reactive<LoginFormType>({
  username: 'admin',
  password: '123456',
});

const validateUsername = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error(t('login.rules.username.empty')));
  } else if (value.length < 5 || value.length > 11) {
    callback(new Error(t('login.rules.username.length')));
  } else if (!/^[A-Za-z0-9]+$/.test(value)) {
    callback(new Error(t('login.rules.username.invalid')));
  }
  callback();
};
const validatePassword = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error(t('login.rules.password.empty')));
  } else if (value.length < 6 || value.length > 18) {
    callback(new Error(t('login.rules.password.length')));
  } else if (!/^[A-Za-z0-9]+$/.test(value)) {
    callback(new Error(t('login.rules.password.invalid')));
  }
  callback();
};

const loginFormRules = reactive<FormRules<typeof loginFormData>>({
  username: [{ validator: validateUsername, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (!valid) return;

    try {
      const { message } = await userLogin(loginFormData);
      ElMessage.success(message);

      await $router.push({ path: '/' });
    } catch (err) {
      console.error(err);
      ElMessage.error((err as Error).message);
    }
  });
};
</script>

<template>
  <div class="login-form">
    <el-form
      ref="loginFormRef"
      :model="loginFormData"
      status-icon
      :rules="loginFormRules"
      class="login-el-form"
    >
      <span class="title">Login</span>
      <el-form-item prop="username">
        <el-input
          v-model="loginFormData.username"
          autocomplete="off"
          placeholder="Username"
        >
          <template #prefix>
            <el-icon :size="25">
              <i-material-symbols:person />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginFormData.password"
          type="password"
          show-password
          autocomplete="off"
          placeholder="Password"
        >
          <template #prefix>
            <el-icon :size="25">
              <i-material-symbols:lock />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <div class="footer">
        <el-button class="submit" text @click="submitForm(loginFormRef)">
          →
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 520px;
  background-color: rgb(128 128 128 / 10%);
  border-radius: 20px;
  box-shadow: inset 1px 1px 6px rgb(128 128 128 / 20%);
  backdrop-filter: blur(4px);
  transform: translate(-50%, -50%);
  animation: fade-form ease-out 1s 0.2s backwards;

  @keyframes fade-form {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow:
      inset 1px 1px 3px rgb(128 128 128 / 10%),
      4px 4px 25px rgb(0 0 0 / 20%);
  }
}

.login-el-form {
  position: absolute;
  left: 50%;
  width: 80%;
  transform: translate(-50%);

  .title {
    display: inline-block;
    width: 100%;
    padding-left: 10px;
    margin: 60px 0 70px;
    font-size: 35px;
    font-weight: 600;
  }

  .el-form-item {
    margin-bottom: 40px;
  }

  :deep(.el-input__wrapper) {
    background-color: transparent;
    border-bottom: 1px solid rgb(128 128 128);
    border-radius: unset;
    box-shadow: none;

    .el-input__inner {
      font-size: 22px;
    }
  }

  :deep(.el-form-item.is-error) {
    .el-input-tag__wrapper,
    .el-input__wrapper,
    .el-select__wrapper,
    .el-textarea__inner {
      box-shadow: none;
    }

    .el-input-tag__wrapper.is-focus,
    .el-input-tag__wrapper:focus,
    .el-input-tag__wrapper:hover,
    .el-input__wrapper.is-focus,
    .el-input__wrapper:focus,
    .el-input__wrapper:hover,
    .el-select__wrapper.is-focus,
    .el-select__wrapper:focus,
    .el-select__wrapper:hover,
    .el-textarea__inner.is-focus,
    .el-textarea__inner:focus,
    .el-textarea__inner:hover {
      box-shadow: none;
    }
  }

  :deep(.el-input__prefix-inner) {
    margin-right: 10px;
  }

  .footer {
    display: flex;
    justify-content: center;
    margin-top: 80px;

    .submit {
      width: 80px;
      height: 80px;
      font-size: 30px;
      background: rgb(128 128 128 / 5%);
      border-radius: 50%;
      box-shadow: 0 2px 10px rgb(128 128 128 / 50%);
      transition: all 0.2s ease-in-out;

      &:hover {
        width: 160px;
        border-radius: 80px;
        box-shadow:
          0 0 10px rgb(128 128 128 / 20%),
          inset 0 0 5px rgb(128 128 128 / 20%);
      }
    }
  }
}
</style>
