<script setup lang=ts>
import { usePostResponseStore } from '@/stores/usePostResponseStore';
import { computed } from 'vue';

const postStore = usePostResponseStore();

const fetchMorePost = () => {
  postStore.pageSize += 6;
  postStore.FETCH_ALL(postStore.pageSize)
}

const hasNextPage = computed(() => postStore.posts.size > postStore.posts.numberOfElements)

</script>
<template>
  <div class="container" v-if="!postStore.isPostLoaded">
    <button @click="fetchMorePost" v-if="!hasNextPage">More Posts</button>
  </div>
</template>

<style lang='scss' scoped>
.darkMode {
  button {
    background-color: $pearl !important;
    color: $black-forest !important;
  }
}

.container {
  width: $desktop-width;
  margin: px-to-rem(50) auto px-to-rem(150) auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 80px;
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