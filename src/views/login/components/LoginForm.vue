<script setup lang="ts">
import { useUserStore } from '@/store/modules/user';

import { Lock, User } from '@element-plus/icons-vue';
import { useForm } from '@vorms/core';
import { ElMessage } from 'element-plus';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

defineOptions({ name: 'LoginForm' });

const { t } = useI18n();
const $router = useRouter();

const userStore = useUserStore();

const {
  values: loginFormData,
  errors,
  handleSubmit,
  handleReset,
  isSubmitting,
  register,
} = useForm({
  initialValues: {
    username: 'admin',
    password: '123456',
  },
  validate(values) {
    const errors: Record<string, string> = {};

    if (!values.username) {
      errors.username = t('login.rules.username.empty');
    } else if (values.username.length < 5 || values.username.length > 11) {
      errors.username = t('login.rules.username.length');
    } else if (!/^[A-Za-z0-9]+$/.test(values.username)) {
      errors.username = t('login.rules.username.invalid');
    }

    if (!values.password) {
      errors.password = t('login.rules.password.empty');
    } else if (values.password.length < 6 || values.password.length > 18) {
      errors.password = t('login.rules.password.length');
    } else if (!/^[A-Za-z0-9]+$/.test(values.password)) {
      errors.password = t('login.rules.password.invalid');
    }

    return errors;
  },
  async onSubmit(values, { setSubmitting }) {
    try {
      const { message } = await userStore.userLogin(values);
      ElMessage.success({ message, type: 'success' });
      await $router.push('/');
    } catch (error) {
      ElMessage.error({ message: (error as Error).message, type: 'error' });
    } finally {
      setTimeout(() => {
        // // 无论成功或失败，手动停止 loading
        setSubmitting(false);
      }, 2000);
    }
  },
});

const { attrs: usernameFieldAttrs } = register('username');
const { attrs: passwordFieldAttrs } = register('password');
</script>

<template>
  <div class="login-form">
    <el-form :model="loginFormData" @submit.prevent="handleSubmit" @reset.prevent="handleReset">
      <h1>{{ $t('login.form.hello') }}</h1>
      <h2>{{ $t('login.form.welcome') }}</h2>
      <el-form-item prop="username" :error="errors.username">
        <el-input
          v-model="loginFormData.username"
          :prefix-icon="User"
          :placeholder="$t('login.form.username')"
          v-bind="usernameFieldAttrs"
        />
      </el-form-item>
      <el-form-item prop="password" :error="errors.password">
        <el-input
          v-model="loginFormData.password"
          :prefix-icon="Lock"
          show-password
          type="password"
          :placeholder="$t('login.form.password')"
          v-bind="passwordFieldAttrs"
        />
      </el-form-item>
      <div class="login-button">
        <el-row>
          <el-col :xs="24" :sm="12">
            <el-button type="primary" native-type="reset">{{ $t('login.button.reset') }}</el-button>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-button type="primary" native-type="submit" :loading="isSubmitting">
              {{ $t('login.button.submit') }}
            </el-button>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.login-form {
  position: fixed;
  top: 50%; /* 将表单的顶部定位到页面垂直中心 */
  left: 50%; /* 将表单的左侧定位到页面水平中心 */
  width: 30%;
  padding: 40px;
  border-radius: 20px; /* 添加圆角 */
  box-shadow: 0 4px 12px rgb(0 0 0 / 10%); /* 添加阴影 */
  transform: translate(-50%, -50%); /* 将表单的中心点移动到页面中心 */

  h1 {
    font-size: 40px;
    color: white;
  }

  h2 {
    margin: 20px 0;
    font-size: 20px;
    color: white;
  }

  .login-button {
    .el-row {
      display: flex;
      gap: 20px;
      width: 100%;

      .el-col {
        flex: 1;

        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>
