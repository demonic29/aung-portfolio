<template>
  <div id="container">
    <NavBar/>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>

</template>

<script>
import MainPage from './views/MainPage.vue';
import NavBar from './views/NavBar.vue';
import Footer from './views/Footer.vue'
  export default {
    name : "App",
    components : {
      MainPage,
      NavBar,
      Footer
    }
  }

</script>

<style scoped>
  .container a{
    color: #FFF;
    text-decoration: none;
  }
</style>