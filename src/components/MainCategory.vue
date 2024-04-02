<script setup lang=ts>
import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="container">
    <RouterLink to="/category/vue" class="cetegory">
      Vue.js
    </RouterLink>
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
.container {
  width: $desktop-width;
  margin: px-to-rem(20) auto;
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
    transition: all .3s ease;

    &:nth-child(1):hover {
      @include box-shadow-animation(#ccae62);
    }

    &:nth-child(2):hover {
      @include box-shadow-animation(#226f938c);
    }

    &:nth-child(3):hover {
      @include box-shadow-animation(#47478788);
    }

    &:nth-child(4):hover {
      @include box-shadow-animation(#218c758a);
    }

    &:nth-child(5):hover {
      @include box-shadow-animation(#b339398e);
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