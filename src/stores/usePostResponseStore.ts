import { ref } from 'vue';
import { defineStore } from 'pinia';
import { fetchPost, fetchPostAll } from '@/api';
import type { PostResopnse } from '@/utils/types';
import { useLoaderStore } from './useLoaderStore';

export const usePostResponseStore = defineStore('post-response-store', () => {
  const posts = ref([]);

  const post = ref<PostResopnse | null>({
    id: 0,
    title: 'default',
    content: 'default',
    createdDate: 'default',
    modifiedDate: 'default',
    thumbnail: 'default',
    views: 0,
    categoryTitle: 'default',
    tags: ['default']
  });

  const FETCH_POST = async (postId: string | string[]) => {
    const loaderStore = useLoaderStore();
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

  const FETCH_ALL = async () => {
    await fetchPostAll()
      .then((response) => {
        posts.value = response.data;
      })
      .catch((error) => console.log('Error fetching post: ', error));
  };

  return { post, posts, FETCH_POST, FETCH_ALL };
});
