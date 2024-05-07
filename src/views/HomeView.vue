<script setup lang="ts">
import MainHeader from '@/components/common/MainHeader.vue';
import MainBanner from '@/components/common/MainBanner.vue';
import MainCategory from '@/components/category/MainCategory.vue';
import PostAll from '@/components/post/PostAll.vue';
import MainFooter from '@/components/common/MainFooter.vue';
import MoreButton from '@/components/common/MoreButton.vue';
import PopularPost from '@/components/post/PopularPost.vue';
import { usePostResponseStore } from '@/stores/usePostResponseStore';
import { onBeforeMount } from 'vue';

const bannerImage = '/src/assets/img/banner4.jpg';

const store = usePostResponseStore();

const isExpired = () => {
  if (localStorage.getItem('visitedPostCreatedAt')) {
    const storedCreatedAt = parseInt(localStorage.getItem('visitedPostCreatedAt') || '0');
    return Date.now() - storedCreatedAt >= 24 * 60 * 60 * 1000
  }
}

onBeforeMount(() => {
  store.FETCH_MAIN_PAGE()
  if (!localStorage.getItem('visitedPost')) {
    localStorage.setItem('visitedPost', JSON.stringify([]))
    localStorage.setItem('visitedPostCreatedAt', Date.now().toString())
  }

  if (isExpired()) {
    localStorage.removeItem('visitedPost')
    localStorage.setItem('visitedPostCreatedAt', Date.now().toString())
  }
}
)
</script>

<template>
  <main>
    <main-header />
    <main-banner :img="bannerImage" />
    <main-category />
    <popular-post />
    <div class="all-post-title">
      <h1>All Posts</h1>
    </div>
    <post-all />
    <more-button />
    <main-footer />
  </main>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

.all-post-title {
  width: $desktop-width;
  margin: px-to-rem(10) auto;
  margin-top: px-to-rem(200);

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 270px;
    text-align: center;
  }

  @media (min-width:768px) and (max-width: 1024px) {
    width: 100%;
    margin-top: 0;
  }


  h1 {
    font-weight: 600;
    font-family: $secondary-font-en;
    font-size: px-to-rem(40);
  }
}
</style>