<script setup lang=ts>
const props = defineProps(['img']);
</script>
<template>
  <div class="container">
    <div class="banner">
      <img :src="props.img" alt="main-banner">
    </div>
  </div>
</template>

<style lang='scss' scoped>
.container {
  width: $desktop-width;
  height: px-to-rem(440);
  margin: px-to-rem(10) auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .banner {
    width: 100%;
    height: 100%;
    height: px-to-rem(420);
    margin-top: px-to-rem(10);

    img {
      width: 100%;
      height: 100%;
      border-radius: px-to-rem(25);
    }
  }
}
</style>