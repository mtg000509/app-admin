<script setup lang="ts">
import { useUserStore } from '@/store/modules/user';

import type { FormInstance, FormRules } from 'element-plus';

import { reactive, ref } from 'vue';

import { Lock, User } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

defineOptions({ name: 'LoginForm' });

// 获取翻译函数
const { t } = useI18n();

// 表单实例
const loginFormRef = ref<FormInstance>();

// 登录表单数据
const loginFormData = reactive({
  username: 'admin',
  password: '123456',
});

// 验证用户名
const validateUsername = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error(t('login.rules.username.empty')));
  } else if (value.length < 5 || value.length > 11) {
    callback(new Error(t('login.rules.username.length')));
  } else if (!/^[A-Za-z0-9]+$/.test(value)) {
    callback(new Error(t('login.rules.username.invalid')));
  } else {
    callback();
  }
};

// 验证密码
const validatePassword = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error(t('login.rules.password.empty')));
  } else if (value.length < 6 || value.length > 18) {
    callback(new Error(t('login.rules.password.length')));
  } else if (!/^[A-Za-z0-9]+$/.test(value)) {
    callback(new Error(t('login.rules.password.invalid')));
  } else {
    callback();
  }
};

// 登录表单校验规则
const loginFormRules = reactive<FormRules<typeof loginFormData>>({
  username: [{ validator: validateUsername, trigger: 'change' }],
  password: [{ validator: validatePassword, trigger: 'change' }],
});

// 获取 user store 实例
const userStore = useUserStore();

// 获取路由实例
const $router = useRouter();

// 提交登录表单
const submitLoginForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;

  const isValid = await new Promise((resolve) => {
    formEl.validate((valid) => resolve(valid));
  });

  if (isValid) {
    try {
      const { message } = await userStore.userLogin(loginFormData);
      ElMessage.success({ message, type: 'success' });
      await $router.push('/');
    } catch (error) {
      ElMessage.error({ message: (error as Error).message, type: 'error' });
    }
  }
};
</script>
<template>
  <div class="bg">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="form">
    <el-form ref="loginFormRef" :model="loginFormData" :rules="loginFormRules">
      <div class="title">{{ $t('login.form.title') }}</div>
      <el-form-item prop="username">
        <el-input
          v-model="loginFormData.username"
          :prefix-icon="User"
          type="text"
          :placeholder="$t('login.form.username')"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginFormData.password"
          :prefix-icon="Lock"
          type="password"
          :placeholder="$t('login.form.password')"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="submitLoginForm(loginFormRef)">→</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.bg {
  position: absolute;
  width: 100%;
  height: 100vh;
  animation: am2 2s cubic-bezier(0.45, 0.05, 0.55, 0.95) backwards;

  @keyframes am2 {
    0% {
      transform: scale(0, 0) rotateZ(60deg);
    }

    100% {
      transform: scale(1, 1) rotateZ(0);
    }
  }

  span {
    position: absolute;
    width: 120px;
    height: 120px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 1px 1px 50px #000;
  }

  span:nth-child(1) {
    top: 100px;
    left: 520px;
    width: 120px;
    height: 120px;
    background: purple;
    animation: am1 ease-in-out 3s infinite alternate;
  }

  span:nth-child(2) {
    top: 190px;
    left: 860px;
    width: 60px;
    height: 60px;
    background: cyan;
    animation: am1 ease-in-out 2.5s 0.5s infinite alternate;
  }

  span:nth-child(3) {
    top: 530px;
    left: 840px;
    width: 200px;
    height: 200px;
    background: orange;
    animation: am1 ease-in-out 4s infinite alternate-reverse;
  }

  @keyframes am1 {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-30px);
    }
  }

  span:nth-child(1),
  span:nth-child(2),
  span:nth-child(3) {
    animation: am1 2.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate;
  }
}

.form {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 480px;
  color: #eee;
  background-color: rgb(255 255 255 / 5%);
  border-radius: 20px;
  box-shadow: inset 1px 1px 6px rgb(255 255 255 / 30%);
  backdrop-filter: blur(4px);
  transform: translate(-50%, -50%);
  animation: am3 ease-out 1s 0.2s backwards;

  &:hover {
    box-shadow:
      inset 1px 1px 3px rgb(255 255 255 / 90%),
      4px 4px 25px rgb(0 0 0 / 90%);
  }

  @keyframes am3 {
    0% {
      opacity: 0;
      transform: translate(-50%, -42%);
    }

    100% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  .el-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;

    .title {
      display: inline-block;
      width: 100%;
      padding-left: 15px;
      margin-top: 50px;
      font-size: 26px;
    }

    .el-input {
      height: 45px;
      margin-top: 40px;
      font-size: 18px;
    }

    :deep(.el-input__inner) {
      padding-right: 45px;
      padding-left: 15px;
      color: #eee;
    }

    :deep(.el-input__wrapper) {
      background: transparent;
      border-bottom: 1px solid #666;
      border-radius: 0;
      box-shadow: none;
    }

    :deep(.el-form-item__error) {
      padding-top: 10px;
      padding-left: 37px;
    }

    .el-button {
      width: 70px;
      height: 70px;
      margin-top: 60px;
      font-size: 28px;
      font-weight: bold;
      color: #eee;
      cursor: pointer;
      background: rgb(255 255 255 / 10%);
      border: none;
      border-radius: 50%;
      box-shadow: 0 2px 10px #111;
      transition: all 0.3s ease-in-out;

      &:hover {
        width: 160px;
        border-radius: 70px;
        box-shadow:
          0 0 10px #999,
          inset 0 0 5px #333;
      }
    }
  }
}
</style>
