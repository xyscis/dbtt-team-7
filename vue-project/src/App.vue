<script setup>

import HomePage from './components/HomePage.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/home.PNG" width="400px" height="400px" />
  </header>

  <main>
    <HomePage />
  </main>
  <Footer></Footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}


/* Footer */
#app {
  padding-bottom: 50px; 
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f8f9fa; 
  text-align: left;
  padding: 10px 0; 
  border-top: 1px solid #e7e7e7; 
}
</style>