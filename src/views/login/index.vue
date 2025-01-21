<script setup lang="ts">
import LangSwitch from '@/components/LangSwitch/index.vue';
import SvgIcon from '@/components/SvgIcon/index.vue';

import { User, Lock } from '@element-plus/icons-vue';
import { useForm } from '@vorms/core';
import { useI18n } from 'vue-i18n';

defineOptions({ name: 'Login' });

const { t } = useI18n();

const {
  values: loginFormData,
  errors,
  handleSubmit,
  handleReset,
  isSubmitting,
  register,
} = useForm({
  initialValues: {
    username: '',
    password: '',
  },
  validate(values) {
    const errors: Record<string, string> = {};

    if (!values.username) {
      errors.username = t('login.rules.username.empty');
    } else if (values.username.length < 5 || values.username.length > 11) {
      errors.username = t('login.rules.username.length');
    }

    if (!values.password) {
      errors.password = t('login.rules.password.empty');
    } else if (values.password.length < 6 || values.password.length > 18) {
      errors.password = t('login.rules.password.length');
    }

    return errors;
  },
  onSubmit(values, { setSubmitting }) {
    try {
      // 提交成功逻辑
      console.log('Form submitted:', values);
    } catch (error) {
      // 处理错误
      console.error('Submission failed:', error);
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
  <div class="login-container">
    <div class="login-header">
      <lang-switch />
      <el-button circle>
        <svg-icon name="help" color="black" width="24" height="24" />
      </el-button>
    </div>
    <el-form class="login-form" :model="loginFormData" @submit.prevent="handleSubmit" @reset.prevent="handleReset">
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
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/login/background.jpg') no-repeat;
  background-size: cover;

  .login-header {
    display: flex;
    gap: 10px;
    align-items: center; /* 垂直居中 */
    justify-content: flex-end; /* 内容右对齐 */
    height: 50px;
    padding-right: 20px; /* 添加右侧内边距，避免内容贴边 */

    .el-button {
      background-color: transparent !important; /* 设置背景色为透明 */
      border: none !important; /* 移除边框 */
    }
  }

  .login-form {
    position: fixed;
    top: 50%; /* 将表单的顶部定位到页面垂直中心 */
    left: 50%; /* 将表单的左侧定位到页面水平中心 */
    width: 30%;
    padding: 40px;
    border-radius: 8px; /* 添加圆角 */
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
