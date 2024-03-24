<script setup lang=ts>

</script>
<template>
  <div class="container">
    <div class="cetegory">
      Vue.js
    </div>
    <div class="cetegory">
      Spring
    </div>
    <div class="cetegory">
      CSS
    </div>
    <div class="cetegory">
      개발기
    </div>
    <div class="cetegory">
      글쓰기
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import '../assets/variables.scss';

.container {
  width: $desktop-width;
  // border: 1px solid #000;
  margin: auto;
  display: flex;
  justify-content: space-between;

  .cetegory {
    border: 1px solid #000;
    width: px-to-rem(170);
    text-align: center;
    border-radius: px-to-rem(7);
    padding: px-to-rem(10);
    margin-top: px-to-rem(10);
  }

  .cetegory:nth-child(1) {
    background-color: #FFDA79;
    border: none;
    color: #FF793F;
  }

  .cetegory:nth-child(2) {
    background-color: #34ace075;
    border: none;
    color: #227093;
  }

  .cetegory:nth-child(3) {
    background-color: #716fd369;
    border: none;
    color: #706FD3;
  }

  .cetegory:nth-child(4) {
    background-color: #33d9b26e;
    border: none;
    color: #218C74;
  }

  .cetegory:nth-child(5) {
    background-color: #ff525277;
    border: none;
    color: #B33939;
  }

}
</style>