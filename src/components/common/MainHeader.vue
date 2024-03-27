<script setup lang=ts>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <RouterLink class="main-logo" to="/">
      <img src="@/assets/img/gomdol2.jpg" alt="main-logo">
    </RouterLink>
    <div class="sub-logo-container">
      <span class="search-bar">
        <i class="fa-solid fa-magnifying-glass"></i>
      </span>
      <span class="login">
        <i class="fa-solid fa-user"></i>
      </span>
    </div>
  </header>
</template>

<style lang='scss' scoped>
header {
  width: $desktop-width;
  margin: px-to-rem(15) auto px-to-rem(10) auto;
  display: flex;
  align-items: center;

  .main-logo {
    img {
      width: px-to-rem(250);
    }
  }

  .sub-logo-container {
    margin-left: auto;

    span {
      margin-right: px-to-rem(5);
      font-size: px-to-rem(25);
      cursor: pointer;
    }
  }
}
</style>