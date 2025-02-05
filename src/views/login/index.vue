<script setup lang="ts">
defineOptions({ name: 'Login' });
</script>

<template>
  <div class="container">
    <div class="header">1</div>
    <div class="main">
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: rosybrown;

  .header {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 50px;
    background-color: greenyellow;
  }

  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 360px;
    height: 480px;
    background-color: red;
    transform: translate(-50%, -50%); /* Centering the .main */

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0; /* Ensure background stays behind other content */
      width: 100%;
      height: 100%;
      background-color: aqua;
    }

    .glass {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      padding: 20px;
      background-color: rgb(255 255 255 / 10%);
      border-radius: 20px;
      box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
      backdrop-filter: blur(10px);
    }
  }
}

//   .bg {
//     position: absolute;
//     width: 600px;
//     height: 600px;
//     background-color: rebeccapurple;
//     // top: 50%;
//     // left: 50%;
//     // transform: translate(-50%, -50%);
//     top: 0;
//     left: 0;
//     animation: am2 ease-out 1s;

//     span {
//       background: #fff;
//       position: absolute;
//       top: 117px;
//       left: 143px;
//       width: 120px;
//       height: 120px;
//       border-radius: 50%;
//       box-shadow: 1px 1px 50px #000;
//     }

//     span:nth-child(1) {
//       top: 117px;
//       left: 143px;
//       width: 120px;
//       height: 120px;
//       animation: am1 ease-in-out 3s infinite alternate;
//     }

//     span:nth-child(2) {
//       top: 518px;
//       left: 434px;
//       width: 200px;
//       height: 200px;
//       background: orange;
//       animation: am1 ease-in-out 4s infinite alternate-reverse;
//     }

//     span:nth-child(3) {
//       top: 196px;
//       left: 483px;
//       width: 60px;
//       height: 60px;
//       background: cyan;
//       animation: am1 ease-in-out 2.5s 0.5s infinite alternate;
//     }

//     @keyframes am1 {
//       0% {
//         transform: translateY(0);
//       }
//       100% {
//         transform: translateY(-30px);
//       }
//     }

//     @keyframes am2 {
//       0% {
//         transform: scale(0, 0) rotateZ(60deg);
//       }
//       100% {
//         transform: scale(1, 1) rotateZ(0);
//       }
//     }
//   }

//   .glass {
//     position: absolute;
//     width: 360px;
//     height: 480px;
//     border-radius: 20px;
//     color: #eee;
//     background: rgba(255, 255, 255, 0.05);
//     // top: 50%;
//     // left: 50%;
//     // transform: translate(-50%, -50%);
//     top: 160px;
//     left: 220px;
//     backdrop-filter: blur(4px);
//     box-shadow:
//       inset 1px 1px 6px rgba(255, 255, 255, 0.3),
//       2px 2px 15px rgba(0, 0, 0, 0.5);

//     animation: am3 ease-out 1s 0.2s backwards;

//     .title {
//       display: inline-block;
//       font-size: 26px;
//       margin-left: 34px;
//       margin-top: 40px;
//     }

//     input {
//       background: transparent;
//       outline: none;
//       border: none;
//       border-bottom: 1px solid #666;
//       width: 80%;
//       height: 45px;
//       color: #eee;
//       font-size: 18px;
//       margin-left: 34px;
//       margin-top: 40px;
//     }

//     button {
//       border: none;
//       width: 70px;
//       height: 70px;
//       border-radius: 50%;
//       color: #eee;
//       font-weight: bold;
//       font-size: 28px;
//       margin-left: 145px;
//       margin-top: 71px;
//       cursor: pointer;
//       background: rgba(255, 255, 255, 0.1);
//       box-shadow: 0px 2px 10px #111;

//       transition: all 0.3s ease-in-out;

//       &:hover {
//         width: 160px;
//         border-radius: 70px;
//         margin-left: 105px;
//         box-shadow:
//           0px 0px 10px #999,
//           inset 0px 0px 5px #333;
//       }
//     }

//     .glass:hover {
//       box-shadow:
//         inset 1px 1px 3px rgba(255, 255, 255, 0.9),
//         4px 4px 25px rgba(0, 0, 0, 0.9);
//       backdrop-filter: blur(7px);
//     }

//     @keyframes am3 {
//       0% {
//         transform: translateY(8px);
//         opacity: 0;
//       }
//       100% {
//         transform: translateY(0);
//         opacity: 1;
//       }
//     }
//   }
// }
</style>
