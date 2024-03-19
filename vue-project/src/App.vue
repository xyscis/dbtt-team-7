<script setup>

import Footer from './components/Footer.vue'
</script>

<template>
  <router-view></router-view>

  <img src="./assets/southwestplane.png" class="bottom-image">
  <Footer></Footer>

</template>

<style scoped>
.bottom-image {
  position: fixed;
  bottom: -75px;
  left: 0;
  width: 100%; /* Ensures the image spans the entire width */
  z-index: -1; /* Ensures the image stays behind the content */
}

</style>