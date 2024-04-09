import { defineStore } from 'pinia';
import { deletePost } from '@/api';
import { useLoaderStore } from './useLoaderStore';
import { usePostSaveStore } from './usePostSaveStore';
import { updatePost } from '@/api';

export const usePostDeleteUpdateStore = defineStore('post-delete-update-store', () => {
  const DELETE = async (id: string[] | string) => {
    const loaderStore = useLoaderStore();
    loaderStore.isLoaded = true;
    try {
      const confirmed = window.confirm('정말 삭제하시겠습니까?');

      if (confirmed) {
        await deletePost(id)
          .then(() => {
            window.location.href = '/';
          })
          .catch((error) => console.log(error));
      }
    } finally {
      loaderStore.isLoaded = false;
    }
  };

  const UPDATE = async (id: string[] | string) => {
    const store = usePostSaveStore();
    const loaderStore = useLoaderStore();
    loaderStore.isLoaded = true;

    const data = {
      title: store.postSaveForm.title,
      content: store.postSaveForm.content,
      categoryTitle: store.postSaveForm.categoryTitle,
      tags: store.postSaveForm.tags,
      id: id
    };
    try {
      await updatePost(data)
        .then(() => (window.location.href = '/'))
        .catch((error) => console.log(error));
    } finally {
      loaderStore.isLoaded = false;
    }
  };

  return { DELETE, UPDATE };
});
