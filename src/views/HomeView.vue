<script setup lang="ts">
import MainHeader from '@/components/common/MainHeader.vue';
import MainBanner from '@/components/MainBanner.vue';
import MainCategory from '@/components/MainCategory.vue'
import RecentPost from '@/components/RecentPost.vue'
import AllPost from '@/components/AllPost.vue';
import MainFooter from '@/components/common/MainFooter.vue';
</script>

<template>
  <main>
    <main-header />
    <main-banner />
    <main-category />
    <recent-post />
    <all-post />
    <main-footer />
  </main>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';
</style>