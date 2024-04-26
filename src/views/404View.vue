<script setup lang=ts>
import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="container">
    <img src="/src/assets/img/404NotFound.png" alt="banner-image">
    <h1>Page Not Found..</h1>
    <p>Oops! It looks like the page you're trying to access doesn't exist.<br> Please check the URL or navigate back to
      the
      homepage.
    </p>
    <RouterLink to="/" class="main-page-btn">Main page</RouterLink>
  </div>
</template>

<style lang='scss' scoped>
.darkMode {
  .container {
    background-color: #121212 !important;
    color: $pearl !important;

    .main-page-btn {
      background-color: $pearl;
      color: $black-forest;
    }
  }
}

.container {
  display: flex;
  flex-flow: column wrap;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: $background-color;
  font-family: "Rancho";
  text-align: center;

  img {
    border-radius: 50%;
    width: 350px;
    height: auto;
  }

  h1 {
    font-size: 3rem;
    margin-top: 30px;
  }

  p {
    font-size: 20px;
  }

  .main-page-btn {
    margin-top: 20px;
    color: $pearl;
    background-color: $black-forest;
    border-radius: 5px;
    padding: 8px;
    transition: all .3s ease;

    &:hover {
      @include box-shadow-animation($silver-black);
    }
  }
}
</style>