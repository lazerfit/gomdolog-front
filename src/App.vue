<script setup lang="ts">
import { RouterView } from 'vue-router'
import BasicLoader from './components/common/BasicLoader.vue';
import { useDarkModeStore } from '@/stores/useDarkModeStore';
import { onBeforeMount } from 'vue';
import { useMeta } from 'vue-meta';

const darkModeStore = useDarkModeStore();

useMeta({
  title: 'gomdolog',
  og: {
    title: 'gomdolog',
    description: 'Java/Spring/vue.js 관련 포스팅과 일상/맛집/블록체인을 다루는 개인 블로그입니다.',
    type: 'website',
    keyword: 'blog, java, spring, vue.js'
  }
})

onBeforeMount(() => {
  darkModeStore.setDarkMode()
})

</script>

<template>
  <metainfo />
  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <basic-loader />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
