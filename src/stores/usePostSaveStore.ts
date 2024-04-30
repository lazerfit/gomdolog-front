import { ref } from 'vue';
import { defineStore } from 'pinia';
import { savePost } from '@/api';
import { type PostSave, ToasterStatus } from '@/utils/types';
import { useToasterStore } from './useToasterStore';

export const usePostSaveStore = defineStore('post-save-store', () => {
  const postSaveForm = ref<PostSave>({
    title: '',
    content: '',
    categoryTitle: '',
    tags: []
  });

  const SAVE_POST = async () => {
    const toast = useToasterStore();
    await savePost(postSaveForm.value)
      .then(() => {
        toast.showToast('게시글 저장에 성공하였습니다. 🎉', ToasterStatus.CHECK);
        window.location.href = '/';
      })
      .catch((error) => {
        toast.showToast('게시글 저장에 실패하였습니다.\n다시 저장해주세요.', ToasterStatus.ERROR);
        console.log(error);
      });
  };

  return { postSaveForm, SAVE_POST };
});
