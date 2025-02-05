<script setup lang="ts">
defineOptions({ name: 'LoginForm' });
</script>

<template>
  <div class="bg">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="glass">
    <div class="title">Login</div>
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button>→</button>
  </div>
</template>

<style scoped lang="scss">
.bg {
  position: absolute;

  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  top: 0;
  left: 0;
  width: 600px;
  height: 600px;
  background-color: rebeccapurple;
  animation: am2 ease-out 1s;

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
    top: 117px;
    left: 143px;
    width: 120px;
    height: 120px;
    animation: am1 ease-in-out 3s infinite alternate;
  }

  span:nth-child(2) {
    top: 518px;
    left: 434px;
    width: 200px;
    height: 200px;
    background: orange;
    animation: am1 ease-in-out 4s infinite alternate-reverse;
  }

  span:nth-child(3) {
    top: 196px;
    left: 483px;
    width: 60px;
    height: 60px;
    background: cyan;
    animation: am1 ease-in-out 2.5s 0.5s infinite alternate;
  }

  @keyframes am1 {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-30px);
    }
  }

  @keyframes am2 {
    0% {
      transform: scale(0, 0) rotateZ(60deg);
    }

    100% {
      transform: scale(1, 1) rotateZ(0);
    }
  }
}

.glass {
  position: absolute;

  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  top: 160px;
  left: 220px;
  width: 360px;
  height: 480px;
  color: #eee;
  background: rgb(255 255 255 / 5%);
  border-radius: 20px;
  box-shadow:
    inset 1px 1px 6px rgb(255 255 255 / 30%),
    2px 2px 15px rgb(0 0 0 / 50%);
  backdrop-filter: blur(4px);
  animation: am3 ease-out 1s 0.2s backwards;

  .title {
    display: inline-block;
    margin-top: 40px;
    margin-left: 34px;
    font-size: 26px;
  }

  input {
    width: 80%;
    height: 45px;
    margin-top: 40px;
    margin-left: 34px;
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
    margin-top: 71px;
    margin-left: 145px;
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
      margin-left: 105px;
      border-radius: 70px;
      box-shadow:
        0 0 10px #999,
        inset 0 0 5px #333;
    }
  }

  .glass:hover {
    box-shadow:
      inset 1px 1px 3px rgb(255 255 255 / 90%),
      4px 4px 25px rgb(0 0 0 / 90%);
    backdrop-filter: blur(7px);
  }

  @keyframes am3 {
    0% {
      opacity: 0;
      transform: translateY(8px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
