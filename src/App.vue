<script setup lang="ts">
import { RouterView } from 'vue-router'
import BasicLoader from './components/common/BasicLoader.vue';
import { useDarkModeStore } from '@/stores/useDarkModeStore';
import { onBeforeMount } from 'vue';

const darkModeStore = useDarkModeStore();

onBeforeMount(() => {
  darkModeStore.setDarkMode()
})

</script>

<template>
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
