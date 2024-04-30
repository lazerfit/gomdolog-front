import { defineStore } from 'pinia';
import {
  deletePost,
  updatePost,
  fetchDeletedPosts,
  deletePostPermanent,
  revertPostDelete
} from '@/api';
import { ref } from 'vue';
import { useLoaderStore } from './useLoaderStore';
import { usePostSaveStore } from './usePostSaveStore';
import { type DeletePost, ToasterStatus } from '@/utils/types';
import { useToasterStore } from './useToasterStore';

export const usePostDeleteUpdateStore = defineStore('post-delete-update-store', () => {
  const deletedPosts = ref<DeletePost[] | null>([]);

  const DELETE = async (id: string[] | string) => {
    const toast = useToasterStore();
    const loaderStore = useLoaderStore();
    loaderStore.isLoaded = true;
    try {
      const confirmed = window.confirm('정말 삭제하시겠습니까?');

      if (confirmed) {
        await deletePost(id)
          .then(() => {
            toast.showToast('게시글을 성공적으로 삭제하였습니다.', ToasterStatus.CHECK);
            window.location.href = '/';
          })
          .catch((error) => {
            toast.showToast('오류가 발생하였습니다.\n다시 시도해주세요.', ToasterStatus.ERROR);
            console.log(error);
          });
      }
    } finally {
      loaderStore.isLoaded = false;
    }
  };

  const DELETE_PERMANENT = async (id: number) => {
    const confirmed = window.confirm('정말 삭제하시겠습니까?');

    if (confirmed) {
      await deletePostPermanent(id)
        .then(() => FETCH_DELETED_POST())
        .catch((error) => console.log(error));
    }
  };

  const REVERT_DELETE = async (id: number) => {
    await revertPostDelete(id)
      .then(() => FETCH_DELETED_POST())
      .catch((error) => console.log(error));
  };

  const FETCH_DELETED_POST = async () => {
    await fetchDeletedPosts()
      .then((response) => (deletedPosts.value = response.data))
      .catch((error) => console.log(error));
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

  return { DELETE, UPDATE, deletedPosts, FETCH_DELETED_POST, DELETE_PERMANENT, REVERT_DELETE };
});
