import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLoaderStore = defineStore('loader-store', () => {
  const isLoaded = ref(false);

  return { isLoaded };
});
