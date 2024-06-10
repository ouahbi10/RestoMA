<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
* {
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
$base-color: #da4438;
.loader {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid;
  border-color: $base-color #0000;
  animation: l1 1s infinite;
}
@keyframes l1 {
  to {
    transform: rotate(0.5turn);
  }
}
</style>
