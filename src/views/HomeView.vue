<script setup lang="ts">
import MainHeader from '@/components/common/MainHeader.vue';
import MainBanner from '@/components/MainBanner.vue';
import MainCategory from '@/components/MainCategory.vue'
import AllPost from '@/components/AllPost.vue';
import MainFooter from '@/components/common/MainFooter.vue';
import MoreButton from '@/components/common/MoreButton.vue';
import PopularPost from '@/components/PopularPost.vue';
import { usePostResponseStore } from '@/stores/usePostResponseStore';
import { onBeforeMount } from 'vue';

const bannerImage = '/src/assets/img/banner4.jpg';

const store = usePostResponseStore();

onBeforeMount(() => {
  store.FETCH_MAIN_PAGE()
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
    <all-post />
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