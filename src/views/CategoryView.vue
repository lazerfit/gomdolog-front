<script setup lang=ts>
import MainHeader from '@/components/common/MainHeader.vue';
import MainBanner from '@/components/MainBanner.vue';
import MainCategory from '@/components/MainCategory.vue';
import CategoryTitle from '@/components/CategoryTitle.vue';
import AllPost from '@/components/AllPost.vue';
import MoreButton from '@/components/common/MoreButton.vue';
import MainFooter from '@/components/common/MainFooter.vue';

const bannerImage = '/src/assets/img/banner3.jpg';
</script>
<template>
  <div class="container">
    <main-header />
    <main-banner :img="bannerImage" />
    <main-category />
    <category-title />
    <all-post />
    <more-button />
    <main-footer />
  </div>
</template>

<style lang='scss' scoped></style>