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
  border: 1px solid #000;
  margin: auto;
  display: flex;
  justify-content: space-between;

  .cetegory {
    border: 1px solid #000;
  }
}
</style>