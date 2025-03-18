<script setup lang="ts">
import { useTheme } from '@/hooks';

defineOptions({ name: 'Error' });

const { dark } = useTheme();

const bgColor = () => {
  return dark.value ? '#000000' : '#ffffff';
};

const reverseColor = () => {
  return dark.value ? '#ffffff' : '#000000';
};
</script>

<template>
  <div class="error" :style="{ backgroundColor: bgColor() }">
    <div class="error-content">
      <h1 :style="{ color: reverseColor() }">404</h1>
      <p :style="{ color: reverseColor() }">
        {{ $t('error.title') }}
      </p>
      <router-link to="/" class="home-link" :style="{ color: reverseColor() }">
        {{ $t('error.button') }}
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.error {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;

  &-content {
    position: absolute;
    top: 30%;
    text-align: center;

    h1 {
      margin: 0;
      font-size: 6rem;
    }

    p {
      margin: 1rem 0;
      font-size: 1.5rem;
    }
  }
}

.home-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  font-size: 1rem;
  text-decoration: none;
  background-color: rgb(128 128 128 / 50%);
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.home-link:hover {
  background-color: rgb(128 128 128 / 30%);
}
</style>
