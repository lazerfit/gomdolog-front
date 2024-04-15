<script setup lang=ts>
import MainHeader from '@/components/common/MainHeader.vue';
import MainBanner from '@/components/MainBanner.vue';
import MainCategory from '@/components/MainCategory.vue';
import CategoryTitle from '@/components/CategoryTitle.vue';
import AllPost from '@/components/AllPost.vue';
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
    <transition-group name="fade">
      <main-category />
      <category-title />
      <all-post />
    </transition-group>
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