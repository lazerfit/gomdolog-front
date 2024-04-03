<script setup lang=ts>

</script>
<template>
  <div class="search-bar">
    <form action="#none">
      <input type="search" name="search" pattern=".*\S.*" required placeholder="search...">
    </form>
  </div>
</template>

<style lang='scss' scoped>
.search-bar {

  form {
    margin-right: 10px;

    input {
      max-width: px-to-rem(150);
      border: none;
      border-bottom: 1px solid $dim-black;
      height: px-to-rem(23);
      transition: all .3s ease-in-out;
      font-family: $secondary-font;
      padding-left: px-to-rem(2);

      &:focus::placeholder {
        opacity: 0;
      }

      &::placeholder {
        font-family: $secondary-font-en;
        font-size: 1.3rem;
        font-weight: 600;
        transition: all .3s ease-in-out;
      }
    }
  }
}
</style>