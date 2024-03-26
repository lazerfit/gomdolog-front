<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import MainBanner from '@/components/MainBanner.vue';
import MainCategory from '@/components/MainCategory.vue'
import RecentPost from '@/components/RecentPost.vue'
import AllPost from '@/components/AllPost.vue';
</script>

<template>
  <main>
    <main-header />
    <main-banner />
    <main-category />
    <recent-post />
    <all-post />
  </main>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';
</style>