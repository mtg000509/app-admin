<script setup lang="ts">
defineOptions({ name: 'Layout' });
</script>

<template>
  <div class="container">
    <div class="bg">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="main">
      <div class="title">Login</div>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>→</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #1e1e1e;

  .bg {
    width: 100%;
    height: 100vh;

    span {
      position: absolute;
      top: 117px;
      left: 143px;
      width: 120px;
      height: 120px;
      background: #fff;
      border-radius: 50%;
      box-shadow: 1px 1px 50px #000;
    }

    span:nth-child(1) {
      top: 110px;
      left: 490px;
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
      top: 510px;
      left: 790px;
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
  }

  .main {
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
    transform: translate(-50%, -50%);

    .title {
      display: inline-block;
      width: 80%;
      margin-top: 50px;
      font-size: 26px;
    }

    input {
      width: 80%;
      height: 45px;
      margin-top: 40px;
      font-size: 18px;
      color: #eee;
      outline: none;
      background: transparent;
      border: none;
      border-bottom: 1px solid #666;
    }

    button {
      width: 70px;
      height: 70px;
      margin-top: 70px;
      font-size: 28px;
      font-weight: bold;
      color: #eee;
      cursor: pointer;
      background: rgb(255 255 255 / 10%);
      border: none;
      border-radius: 50%;
      box-shadow: 0 2px 10px #111;
    }
  }
}
</style>
