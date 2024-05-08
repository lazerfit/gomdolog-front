import { ref } from 'vue';
import { defineStore } from 'pinia';
import { savePost } from '@/api';
import { type PostSave, ToasterStatus } from '@/utils/types';
import { useToasterStore } from './useToasterStore';
import { useLoaderStore } from './useLoaderStore';

export const usePostSaveStore = defineStore('post-save-store', () => {
  const postSaveForm = ref<PostSave>({
    title: '',
    content: '',
    categoryTitle: '',
    tags: []
  });

  const SAVE_POST = async () => {
    const toast = useToasterStore();
    const loader = useLoaderStore();
    loader.isLoaded = true;
    try {
      await savePost(postSaveForm.value)
        .then(() => {
          toast.showToast('게시글 저장에 성공하였습니다. 🎉', ToasterStatus.CHECK);
        })
        .catch((error) => {
          toast.showToast('게시글 저장에 실패하였습니다.\n다시 저장해주세요.', ToasterStatus.ERROR);
          console.log(error);
        });
    } finally {
      window.location.href = '/';
      loader.isLoaded = false;
    }
  };

  return { postSaveForm, SAVE_POST };
});
