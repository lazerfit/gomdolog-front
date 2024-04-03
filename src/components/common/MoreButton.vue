<script setup lang=ts>

</script>
<template>
  <div class="container">
    <button>More Posts</button>
  </div>
</template>

<style lang='scss' scoped>
.container {
  width: $desktop-width;
  margin: px-to-rem(50) auto px-to-rem(150) auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media (min-width:768px) and (max-width: 1024px) {
    width: 100%;
    margin-top: 50px;
  }

  button {
    font-family: $secondary-font;
    padding: px-to-rem(5);
    border-radius: px-to-rem(5);
    border: none;
    background-color: $black-forest;
    color: $pearl;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
      @include box-shadow-animation($silver-black);
    }
  }
}
</style>