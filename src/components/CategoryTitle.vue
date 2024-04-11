<script setup lang=ts>
import { useRoute, RouterLink } from 'vue-router';
const route = useRoute();
</script>
<template>
  <div class="container">
    <div class="home">
      <RouterLink to="/" class="fa-solid fa-house"></RouterLink>
    </div>
    <div class="category-title" v-if="route.params.q">
      {{ route.params.q }}
    </div>
    <div class="category-title" v-else>
      {{ route.params.title }}
    </div>
    <div class="post-count">
      6 posts
    </div>
  </div>
</template>

<style lang='scss' scoped>
.container {
  width: $desktop-width;
  margin: px-to-rem(50) auto;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
    margin-top: 270px;
  }

  @media (min-width:768px) and (max-width: 1024px) {
    width: 100%;
  }

  .home {
    text-align: center;

    .fa-house {
      color: $light-black;
      cursor: pointer;
      transition: all .5s ease;

      &:hover {
        color: $black-forest;
      }
    }

  }

  .category-title {
    font-weight: 300;
    // font-family: $secondary-font;
    font-size: px-to-rem(55);
    text-align: center;
  }

  .post-count {
    font-weight: 800;
    font-family: $secondary-font-en;
    font-size: px-to-rem(20);
    text-align: center;
  }
}
</style>