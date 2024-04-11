import { ref } from 'vue';
import { defineStore } from 'pinia';
import {
  fetchPost,
  fetchPostAll,
  fetchPopularPost,
  searchPostByTitle,
  searchPostByCategory
} from '@/api';
import type { PostResopnse, PostResopnseWithoutTags } from '@/utils/types';
import { useLoaderStore } from './useLoaderStore';
import { useRoute } from 'vue-router';

export const usePostResponseStore = defineStore('post-response-store', () => {
  const posts = ref<PostResopnseWithoutTags[]>([]);
  const popularPosts = ref<PostResopnseWithoutTags[]>([]);
  const searchQuery = ref('');
  const isPostLoaded = ref(false);
  const route = useRoute();

  const post = ref<PostResopnse | null>({
    id: 0,
    title: 'default',
    content: 'default',
    createdDate: 'default',
    thumbnail: 'default',
    categoryTitle: 'default',
    tags: ['default']
  });

  const FETCH_POST = async (postId: string | string[]) => {
    const loaderStore = useLoaderStore();
    loaderStore.isLoaded = true;
    isPostLoaded.value = true;
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
      isPostLoaded.value = false;
    }
  };

  const FETCH_POPULAR = async () => {
    isPostLoaded.value = true;
    try {
      await fetchPopularPost()
        .then((response) => {
          popularPosts.value = response.data;
        })
        .catch((error) => console.log('Error fetching post: ', error));
    } finally {
      isPostLoaded.value = false;
    }
  };

  const FETCH_ALL = async () => {
    const loaderStore = useLoaderStore();
    loaderStore.isLoaded = true;
    isPostLoaded.value = true;
    try {
      await fetchPostAll()
        .then((response) => {
          posts.value = response.data;
        })
        .catch((error) => console.log('Error fetching post: ', error));
    } finally {
      loaderStore.isLoaded = false;
      isPostLoaded.value = false;
    }
  };

  const BY_TITLE_SEARCH = async () => {
    const loaderStore = useLoaderStore();
    loaderStore.isLoaded = true;
    isPostLoaded.value = true;
    try {
      await searchPostByTitle(route.params.q)
        .then((response) => {
          posts.value = response.data;
        })
        .catch((error) => console.log('Error fetching post: ', error));
    } finally {
      loaderStore.isLoaded = false;
      isPostLoaded.value = false;
    }
  };

  const BY_CATEGORY_SEARCH = async () => {
    const loaderStore = useLoaderStore();
    loaderStore.isLoaded = true;
    isPostLoaded.value = true;
    try {
      await searchPostByCategory(route.params.title)
        .then((response) => {
          posts.value = response.data;
        })
        .catch((error) => console.log('Error fetching post: ', error));
    } finally {
      loaderStore.isLoaded = false;
      isPostLoaded.value = false;
    }
  };

  return {
    post,
    posts,
    popularPosts,
    isPostLoaded,
    searchQuery,
    FETCH_POST,
    FETCH_ALL,
    FETCH_POPULAR,
    BY_TITLE_SEARCH,
    BY_CATEGORY_SEARCH
  };
});
