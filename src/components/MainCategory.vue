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
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cetegory {
    font-family: $secondary-font;
    width: px-to-rem(170);
    text-align: center;
    border-radius: px-to-rem(20);
    padding: px-to-rem(10);
    margin-top: px-to-rem(10);
    cursor: pointer;
    box-shadow: 5px 5px 20px rgba($color: #333, $alpha: .17);
    overflow: hidden;
    z-index: 1;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: darken(#fff, 5%);
      transition: all .3s;
      z-index: -1;
    }

    &:hover {
      color: #fff;

      &:before {
        width: 100%;
      }
    }
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