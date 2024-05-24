<script setup lang="ts">
import TheHeader from '@/components/header/TheHeader.vue';
import TheBanner from '@/components/common/TheBanner.vue';
import PostAll from '@/components/post/PostAll.vue';
import TheFooter from '@/components/common/TheFooter.vue';
import MoreButton from '@/components/common/MoreButton.vue';
import PostPopular from '@/components/post/PostPopular.vue';
import { usePostResponseStore } from '@/stores/usePostResponseStore';
import { onBeforeMount } from 'vue';

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
    <the-header />
    <the-banner />
    <post-popular />

    <post-all />
    <more-button />
    <the-footer />
  </main>
</template>

<style lang="scss" scoped></style>