import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePostSaveStore = defineStore('post-save-store', () => {
  const postSaveForm = ref({
    title: '',
    content: ''
  });

  return { postSaveForm };
});
