<script setup lang=ts>
</script>
<template>
  <div class="container">
    <div class="banner">
      <img src="/src/assets/img/banner3.jpg" alt="main-banner">
    </div>
  </div>
</template>

<style lang='scss' scoped>
.container {
  width: $desktop-width;
  // height: px-to-rem(440);
  margin: px-to-rem(10) auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 50px;
  }

  @media (min-width:768px) and (max-width: 1024px) {
    width: 100%;
  }

  .banner {
    width: 100%;
    height: px-to-rem(420);
    margin-top: px-to-rem(10);

    img {
      width: 100%;
      height: 100%;
      border-radius: px-to-rem(25);
      object-fit: cover;
    }
  }
}
</style>