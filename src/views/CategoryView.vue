<script setup lang=ts>
import MainHeader from '@/components/common/MainHeader.vue';
import MainBanner from '@/components/common/MainBanner.vue';
import MainCategory from '@/components/category/MainCategory.vue';
import CategoryTitle from '@/components/category/CategoryTitle.vue';
import PostAll from '@/components/post/PostAll.vue';
import MoreButton from '@/components/common/MoreButton.vue';
import MainFooter from '@/components/common/MainFooter.vue';
import { usePostResponseStore } from '@/stores/usePostResponseStore';
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const postStore = usePostResponseStore();
const route = useRoute();

onBeforeMount(() => {
  if (route.params.q) {
    postStore.BY_TITLE_SEARCH()
  }
})
const bannerImage = '/src/assets/img/banner3.jpg';
</script>
<template>

  <div class="container">
    <main-header />
    <main-banner :img="bannerImage" />
    <main-category />
    <category-title />
    <post-all />
    <more-button />
    <main-footer />
  </div>
</template>

<style lang='scss' scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>