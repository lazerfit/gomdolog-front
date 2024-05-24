<script setup lang=ts>
import TheHeader from '@/components/header/TheHeader.vue';
import TheBanner from '@/components/common/TheBanner.vue';
import CategoryTitle from '@/components/category/CategoryTitle.vue';
import PostAll from '@/components/post/PostAll.vue';
import MoreButton from '@/components/common/MoreButton.vue';
import TheFooter from '@/components/common/TheFooter.vue';
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
</script>
<template>

  <div class="container">
    <the-header />
    <the-banner />
    <category-title />
    <post-all />
    <more-button />
    <the-footer />
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