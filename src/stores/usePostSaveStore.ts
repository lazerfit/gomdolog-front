import { ref } from 'vue';
import { defineStore } from 'pinia';
import { savePost } from '@/api';
import type { PostSave } from '@/utils/types';

export const usePostSaveStore = defineStore('post-save-store', () => {
  const tagValue = ref([]);

  const postSaveForm = ref<PostSave>({
    title: '',
    content: '',
    categoryTitle: '',
    tags: tagValue.value
  });

  const SAVE_POST = async () => {
    await savePost(postSaveForm.value)
      .then(() => (window.location.href = '/'))
      .catch((error) => console.log(error));
  };

  return { postSaveForm, tagValue, SAVE_POST };
});
