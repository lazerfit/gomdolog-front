import { ref } from 'vue';
import { defineStore } from 'pinia';
import { fetchPost } from '@/api';
import type { PostResopnse } from '@/utils/types';
import { useLoaderStore } from './useLoaderStore';

const loaderStore = useLoaderStore();

export const usePostResponseStore = defineStore('post-response-store', () => {
  const post = ref<PostResopnse | null>({
    id: 0,
    title: 'default',
    content: 'default',
    createdDate: 'default',
    modifiedDate: 'default',
    thumbnail: 'default',
    views: 0
  });

  const FETCH_POST = async (postId: string | string[]) => {
    loaderStore.isLoaded = true;
    try {
      await fetchPost(postId)
        .then((response) => {
          if (response.data) {
            post.value = response.data;
          } else {
            console.log('Invalid response data');
          }
        })
        .catch((error) => {
          window.location.href = '/notfound';
          console.error('Error fetching post: ', error);
        });
    } finally {
      loaderStore.isLoaded = false;
    }
  };

  return { post, FETCH_POST };
});
